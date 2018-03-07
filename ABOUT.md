# nodeAnglarjs

# Instructions
- npm install first
- to run the test use: npm test
- to run the server use: npm start
- go to http://localhost:9000/ 

# assumptions  
- written as comments in the files 


# Issue Log
- TypeError: app.address is not a function
- solution: export the server from server.js 

## spaces in json 
- use jsonminify 

# heroku general guide for future refrence 
1- change the port to: process.env.PORT
2- create Procfile with: web: node server.js
3- make sure in package json the npm start command points to "node path/server.js" 
4- if you have requests from front end copy the link of your heroku app and past it in url
** the link of your heroku app will apear after you heroku create
