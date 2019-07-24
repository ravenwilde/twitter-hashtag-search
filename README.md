# Twitter Hashtag Search App

Generally, for security reasons, OAuth requests are not handled in the client, so this app is built in two parts so Twitter's API authentication can be properly handled.

### Server:
* `express` server
* `0Auth` package for authentication call
* `node-fetch` makes fetch happen
* `cors` to overcome CORS connection issues
* `bluebird` Promises support for fetch


### Client:
* `create-react-app` project bootstrap
* `redux`, `react-redux` state management
* `redux-thunk` handles async actions
* `cross-fetch` insures fetch cross browser compatibility
* `lodash` makes sorting painless
* `babel-polyfill` because one of the other dependencies wouldn't party without it


## To run locally...

In your terminal, from the root of this project:

```
cd server
npm install
node app.js
```

In a seperate terminal tab or window, from the root of this project:

```
cd client
yarn
yarn start
```

A browser window should spawn with the react app up and running. If it does not, open your browser to [http://localhost:3000/](http://localhost:3000/).


### MVP Criteria:
* Display the most recent OR the most popular tweets for the given hashtag.
* By default the application should display the 10 results but the user should be able to change the number of results returned(10, 25, 50, & 100).
* Once, the results are displayed in a table, the user should be able to sort the data that is in the table.
* For this exercise, do not use any third party library to connect to the Twitter API.

All Criteria are met, however, the popular vs. recent response sometimes does not vary depending upon the hashtag searched. API Documentation suggests that popular results are highly dependent upon additional parameters so my query could likely be refined to facilitate better results.
