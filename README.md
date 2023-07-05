# burger-store-project-react (in Progress)

# Table of Contents
1. [Description](#burger-store-project-react-description)
2. [How to Install and Run the Project](#install-and-run-project)


## burger-store-project-react-description
A project about practicing skills in react.
I'm using Hooks to handle the request and the data i'm receiving(useEffect, useState),
React Router to implement the routing,
Bootstrap for the styles and Font Awesome for the sorting icons.

## install-and-run-project
1.Open your terminal and then type: 
$ git clone {the url to the GitHub repo} 
 (This clones the repo)

2.cd into json_server folder and type: 
npx json-server -w db.json -p 3004 
 (This will start the json-server)

3.cd into react-restaurant folder and type: 
$ npm install 
 (This installs the required dependencies)

4.into the react-restaurant type: 
$ npm start 
 (This will run the React project)

 5.cd into server folder and type: 
 $ npm install 
  (This installs the required dependencies)

 6.Configure MongoDB:
  Make sure you have MongoDB installed and running on your local machine.
  Open the `server.js` file in the `server` folder.
  -Locate the following line of code:
  ```
  mongoose.connect('mongodb://127.0.0.1:27017/emailList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  ```
 - Modify the connection URL `'mongodb://127.0.0.1:27017/emailList'` according to your MongoDB configuration. Replace `127.0.0.1` with the appropriate hostname or IP address, and `27017` with the appropriate port number. `emailList` is the name of the database.
 - Save the changes.

 7.cd into server folder and type: 
 $ nodemon server.js 
   (This will start the server and listen for incoming requests on port 8080)
    [you need to have a mongoDB rrunning in order to use the server folder and to configure it in the server.js file]
