# Social-Network-API

## Description
This API is for a social network application where a user can share their personal or professional thoughts, react to a friends' thought or thoughts, as well as creat a friends list. The web application uses `MongoDB` for databases, `Mongoose` for ODM, `Express.js` for routing, and `Moment.js` for date & timestamps. The data is seeded using `Insomnia`.

## Table of Contents
- [Walk-Through Video](#walk-throughvideo)
- [Application Overview](#app-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech](#tech)
- [Testing](#testing)
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

To CREATE a new user, select `POST` request and enter the new user's username and email address following the models-User.js format. Click `Send`.



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

## Testing


## License

MIT License

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

## Questions
If you have an questions please email me at: [brian.hopper@live.com](brian.hopper@live.com).
My GitHub page is: [GrassHopper12345](https://github.com/Grasshopper12345)
