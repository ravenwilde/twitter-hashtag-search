import React, { Fragment } from 'react';
import { orderBy } from 'lodash';

import '../css/table.css';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: {},
			sort: 'none',
		}
	}
	componentDidUpdate(prevProps) {
	  if (this.props.lastUpdated !== prevProps.lastUpdated) {
	    this.setState({
	    	tweets: this.props.tweets,
	    });
	  }
	}
	
	handleSort = (e) => {
		const newSort = e.target.value;
		const { tweets } = this.state;
		let sortedStatuses = [];
		if (newSort === 'none') {
			sortedStatuses = this.props.tweets.json.statuses;
		} else {
			sortedStatuses = orderBy(tweets.json.statuses, ['retweet_count'], [newSort]);
		}
		this.setState({
			sort: newSort,
			tweets: {
				json: {
					...tweets.json,
					statuses: sortedStatuses,
				}			
			}
		})
	}

	render(){
		const { tweets } = this.state;
		return (
			<div className="twelve columns">
				{tweets.json ? 
					tweets.json.statuses && tweets.json.statuses.length > 0 ? (
						<Fragment>
							<div className="table--control">
								<label htmlFor="sort">Sort by Retweets</label>
								<select onChange={this.handleSort} name="sort" defaultValue="none">
									<option value="none">No Sort</option>
									<option value="asc">Ascending</option>
									<option value="desc">Descending</option>
								</select>
							</div>
							<table>
								<thead>
									<tr>
										<th>User</th>
										<th>Text</th>
										<th>Times Retweeted</th>	
									</tr>
								</thead>
								<tbody>
									{tweets.json.statuses.map((s) => (
											<tr key={s.id}>
												<td>@{s.user.screen_name}</td>
												<td>{s.text}</td>
												<td>{s.retweet_count}</td>
											</tr>
									))}
								</tbody>
							</table>
						</Fragment>
						) : ( <h2>No Tweets Found, Try Again</h2> )
				: (
					<h2>Loading...</h2>
				)}
								
			</div>
		);
	}
}

export default Table;