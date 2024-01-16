# Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/GrassHopper12345/Social-Network-API/blob/main/LICENSE)

## Description
This API is for a social network application where a user can share their personal or professional thoughts, react to a friends' thought or thoughts, as well as creat a friends list. The web application uses `MongoDB` for databases, `Mongoose` for ODM, `Express.js` for routing, and `Moment.js` for date & timestamps. The data is seeded using `Insomnia`.

## Table of Contents
- [Walk-Through Video](#walk-throughvideo)
- [Application Overview](#app-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech](#tech)
- [License](#license)
- [Questions](#questions)

## Walk-Through Video


## Application Overview
![Alt text](<Screenshot 2024-01-15 at 9.31.26 PM.png>)

## All GET PUT POST & DELETE ROUTES using Insomnia for Reactions, Users, Thoughts, & Friends.
![Alt text](<Screenshot 2024-01-15 at 9.35.24 PM.png>)

## Features
1. This is an API based social network that utilizes the noSQL database, MongoDB, by allowing a user to structure the large quantity of unstructured data.

2. Once a user enters the command to run the application, Mongoose models will then be synced to MondoDB database.

![Alt text](<Screenshot 2024-01-12 at 7.26.29 PM.png>)

3. When a user opens the API GET routes for thoughts and users using Insomnia, they will be displayed as JSON format.

4. The routes of Reactions, Thoughts, Users, & Friends were created to test the functionality of the API utilizing Insomnia.

5. User Routes - A user can input a username and email to be assigned a unique ID.

![Alt text](<Screenshot 2024-01-15 at 9.42.35 PM.png>)

- To CREATE a new user, select `POST` request and enter the new user's username and email address following the models-User.js format. Click `Send`.

- A user can serch all users by utilizing the `GET` All Users route or `GET` All Users by ID.

- A user can also update a User by utilizing the `PUT` route.

6. Friend Routes - a user can `CREATE` and `DELETE` a Friend.

![Alt text](<Screenshot 2024-01-16 at 1.25.48 PM.png>)

- To add a Friend, select the `POST` request. In the URL, enter the user ID of the user who is adding a friend, then the user ID of the friend the user is wanting to add.

- A user can view all friends by going to User routes and viewing all users. When a user `Finds All Users` under `Friends`, the user can view the number of friends a User has by viewing the `friendCount`.

- A user can `DELETE` a friend by selecting the `DELETE` request method and typing in the `friendCount` URL the user ID of the user that is wanting to delete a friend and the user ID of the friend that must will be deleted following.

- A user can then check `Find All Users` to check if friend was properly deleted.

7. Thought routes - a user can `CREATE` a thought, `GET` all thoughts, `GET` a single thought by ID, update a thought by ID using `PUT`, and `DELETE` a thought by ID.

![Alt text](<Screenshot 2024-01-16 at 1.52.04 PM.png>)

- To create a new thought, select the `POST` request. The user can then enter the `thoughtText`, `username`, and `userID` of the user creatingthe thought.

- To get all thoughts, a user can select `GET` All Thoughts and select send to view all thoughts.

- To update a thought, a user can select the `PUT` request input in the URL the thought ID and the wanted changes in the `textBody`.

- To delete a thought, a user can select the `DELETE` request and input the thought ID into the URL and select the `Send` button.

- A user can check is all requests have successfully be completed by checking the `GET` All Thoughts request.

8. Reaction Routes - a user can `CREATE` and `DELETE` a reaction.

![Alt text](<Screenshot 2024-01-16 at 3.10.55 PM.png>)

- To `CREATE` a Reaction, a user must select the `POST` request and enter the ID of the thought the user wants to react or comment on. Then the user shall enter the `reactionBody` and `username` in json form to create a reaction.

- To check if the creation was successful, a use can select the `GET` All Thoughts to see the reaction. 

- To delete the reaction, a user shall select the `DELETE` request and enter into the URL the thought ID where the reaction will be deleted from and the reaction ID.

9. MongoDB - Once the data has been created in Insomnia, A user can view the seed data in MongoDB.

![Alt text](<Screenshot 2024-01-16 at 3.16.49 PM.png>)
![Alt text](<Screenshot 2024-01-16 at 3.17.15 PM.png>)

## Installation
- Clone this repository in a code editor similar to VS Code on your local machine.
- `npm i` must be used in a users integrated terminal to download the required dependencies.

## Usage
- A user can spin up the server by typing `node server.js` in the terminal.
- Once server is started a user can use Compass to easily determine if the Mongoose models were synched to the MongoDB database.
- In Compass, select the database named socialNetworkAPIDB. 
- At this point the user should see the two models created `thoughts` and `users`. 
- Select either of the two models to verify data is seeded by user utilizing Insomnia.

## Tech
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/)
- [Express.js](https://expressjs.com/)
- [Moment.js](https://www.npmjs.com/package/moment)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/GrassHopper12345/Social-Network-API/blob/main/LICENSE)

Copyright (c) 2024 BrianH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
MIT License

## Questions
If you have an questions please email me at: [brian.hopper@live.com](brian.hopper@live.com).
My GitHub page is: [GrassHopper12345](https://github.com/Grasshopper12345)
