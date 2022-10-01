<div id="top"></div>

<div align="center">
  <h1 align="center">Uthaan</h1>
  <p align="center">
    The backend repository of the official
    <a href="https://www.uthaan.org/">
    Uthaan website.
  </a>
  </p>
</div>

<!-- FEATURES IMPLEMENTED -->

## Features Implemented

### 1. Auth Routes

- login
  - Users can login by entering only the valid credentials
  - Verification is done using JWT token
- addAdmin
  - Checks are added to make sure valid credentials have been input
  - Only existing admins can add a new admin

### 2. API Routes

- Events
  - addEvent
    - Adds an event to the database
  - getEvents
    - Fetches all events from the database
- Shows
  - getShow
    - Fetches a given show from the database
  - addShow
    - Adds a new show to the database
- Articles
  - getArticles
    - Fetches details of all articles from the articles API
- Interviews
  - getInterviews
    - Fetches details of all interviews from the interviews API
- Images
  - getImages
    - Fetches all the images from the database
  - uploadImage
    - Uploads images to the gallery
  - deleteAllImages
    - Deletes all images stored in the database
  - deleteImage
    - Deletes a single image from the database
- Team
  - getTeams
    - Fetches all the team members, sorted by their roles
  - addTeamMember
    - Adds a team member
  - updateTeamMember
    - Updates the information of a team member
- Messages
  - sendMessage
    - Message can be sent to the club by entering contact details along with the message
  - getMessages
    - Fetches all the messages sent through the website

<!-- BUILT WITH -->

## Built With

- Express.js
- Node.js
- MongoDB
- Bcrypt
- CORS
- Cloudinary
- Formidable
- JWT
- Babel


*If you want to contribute into this project, go through our [contributing guide](CONTRIBUTING.md)*

<!-- CONNECT WITH US -->

## Connect With Us

<div>
<a href="https://github.com/Uthaan-IIITM" target="blank"><img align="center" src="https://github.com/Uthaan-IIITM/Uthaan-Frontend/blob/main/src/assets/readme/github.svg" alt="uthaan" height="40" width="42" /></a>
<a href="https://www.linkedin.com/company/uthaan-iiitm/" target="blank"><img align="center" src="https://github.com/Uthaan-IIITM/Uthaan-Frontend/blob/main/src/assets/readme/linkedin.svg" alt="uthaan" height="40" width="42" /></a>
<a href="https://www.facebook.com/uthaaniiitmg/" target="blank"><img align="center" src="https://github.com/Uthaan-IIITM/Uthaan-Frontend/blob/main/src/assets/readme/fb.svg" alt="uthaan" height="40" width="42" /></a>
<a href="https://medium.com/uthaan" target="blank"><img align="center" src="https://github.com/Uthaan-IIITM/Uthaan-Frontend/blob/main/src/assets/readme/medium.svg" alt="@uthaan" height="40" width="42" /></a>
<a href="https://www.instagram.com/uthaaniiitm/" target="blank"><img align="center" src="https://github.com/Uthaan-IIITM/Uthaan-Frontend/blob/main/src/assets/readme/ig.svg" alt="uthaan" height="40" width="42" /></a>
<a href="https://www.youtube.com/c/UthaanIIITM/" target="blank"><img align="center" src="https://github.com/Uthaan-IIITM/Uthaan-Frontend/blob/main/src/assets/readme/yt.svg" alt="uthaan" height="40" width="42" /></a>
</div>
