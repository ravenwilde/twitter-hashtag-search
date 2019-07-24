import React from 'react';
import { connect } from 'react-redux'

import './css/skeleton.css';
import { fetchTweets, fetchTweetsIfNeeded, } from './actions';
import { Form, Table } from './components';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ...state.params,
    ...state.tweets
  }
}

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { hashtag, count, result_type } = this.props.params;
    dispatch(fetchTweetsIfNeeded(hashtag, count, result_type));
  }
  handleSubmit = (hashtag, count, result_type) => {
    const { dispatch } = this.props;
    dispatch(fetchTweets(hashtag, count, result_type));
  }
  render() {
    const { params, lastUpdated, isFetching, items } = this.props;
    return (
      <div className="container" style={{marginTop: '50px'}}>
        <header className="twelve columns ">
          <h1>Twitter Hashtag Search</h1>
        </header>
        <Form onSubmit={this.handleSubmit} params={params} isFetching={isFetching} />
        <Table lastUpdated={lastUpdated} tweets={items} />
      </div>
    );  
  }
}

export default connect(mapStateToProps)(App)
