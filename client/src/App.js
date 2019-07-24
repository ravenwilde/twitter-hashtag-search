import React from 'react';
import { connect } from 'react-redux'

import './css/skeleton.css';
import { fetchTweets } from './actions';
import { Form, Table } from './components';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ...state.params,
    ...state.tweets
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    fetchTweets: (val, count, type) => dispatch(fetchTweets(val, count, type))
  }
}

const App = ({ params, lastUpdated, fetchTweets, isFetching, items, ...props }) => {
  const handleSubmit = (hashtag, count, type) => {
    fetchTweets(hashtag, count, type);
  }
  return (
    <div className="container" style={{marginTop: '50px'}}>
      <header className="twelve columns ">
        <h1>Twitter Hashtag Search</h1>
      </header>
      <Form onSubmit={handleSubmit} params={params} isFetching={isFetching} />
      <Table lastUpdated={lastUpdated} tweets={items} />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
