# Twitter Hashtag Search App

I built this app in two parts so I could perform the Twitter API's authentication. Generally, for security reasons, OAuth requests are not handled in the client, so for this project I used Express.js to process the authentication and search query. 

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

All Criteria are met, however, the popular vs. recent response sometimes does not vary. API Documentation suggests that popular results are highly dependent upon additional parameters that are not present in this iteration of the application. I would need more time to figure out how to refine my query.
