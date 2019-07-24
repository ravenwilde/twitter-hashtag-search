import React from 'react';

import '../css/form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			...props.params, 
		};
	}

	onChange = (e) => {
		this.setState( {[e.target.name]: e.target.value} );
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { hashtag, count, result_type } = this.state;
		return this.props.onSubmit(hashtag, count, result_type);
	}

	render() {
		const { params, isFetching } = this.props;
		return (
			<div className="twelve columns">
				<form>
					<fieldset> 
				    <div>
				      <span className="hashtag">#</span>
				      <input type="text" name="hashtag" defaultValue={params.hashtag} onChange={this.onChange} />
				      <select name="count" defaultValue={params.count} onChange={this.onChange}>
				      	<option value="10">10</option>
				      	<option value="25">25</option>
				      	<option value="50">50</option>
				      	<option value="100">100</option>
				      </select>
				      <select name="result_type" defaultValue={params.result_type} onChange={this.onChange}>
				      	<option value="recent">Recent</option>
				      	<option value="popular">Popular</option>
				      	<option value="mixed">Mixed</option>
				      </select>
				      <input type="submit" value={ isFetching ? "Fetching..." : "Search"} disabled={isFetching} onClick={this.onSubmit} />
				    </div>
			    </fieldset>
			  </form>
		  </div>
		)		
	}

};

export default Form;