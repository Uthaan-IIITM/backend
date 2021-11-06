<div id="top"></div>

<div align="center">
  <a href="https://www.uthaan.org/">
    <img src="https://user-images.githubusercontent.com/78133928/139945559-b8ab9b6b-b818-4de4-855f-e0a9a647d75b.png" alt="Logo">
  </a>

  <h1 align="center">Uthaan</h1>

  <p align="center">
    The backend repository of the official
    <a href="https://www.uthaan.org/">
    Uthaan website.
  </a>
  </p>
</div>

![Home](https://user-images.githubusercontent.com/78133928/140557019-b677dd15-e040-4726-9920-923aa8961dd3.png)

<!-- FEATURES IMPLEMENTED -->

# Features Implemented

## 1. Auth Routes

- login
  - Users can login by entering only the valid credentials
  - Verification is done using JWT token
- addAdmin
  - Checks are added to make sure valid credentials have been input
  - Only existing admins can add a new admin

## 2. API Routes

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

# Built With

- Express.js
- Node.js
- MongoDB
- Bcrypt
- CORS
- Cloudinary
- Formidable
- JWT
- Babel

<!-- GETTING STARTED -->

# Getting Started

1. Fork the repository
2. Clone the repository

```sh
git clone https://github.com/Uthaan-IIITM/uthaan-backend.git
```

3. Open the folder containing the cloned repository
4. Install the required packages, libraries and dependencies

```sh
npm install
```

5. Custom API keys can be set up in a .env file
6. Run the project locally to access the backend functionality of the website

```sh
nodemon start
```

<!--CONTRIBUTORS -->

# Contributors

<a href = "https://github.com/Uthaan-IIITM/uthaan-backend/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Uthaan-IIITM/
uthaan-backend"/>
</a>

<!-- CONNECT WITH US -->

# Connect With Us

<div align="center">
<a href="https://github.com/Uthaan-IIITM" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="uthaan" height="30" width="40" /></a>
<a href="https://www.linkedin.com/company/uthaan-iiitm/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="uthaan" height="30" width="40" /></a>
<a href="https://www.facebook.com/uthaaniiitmg/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="uthaan" height="30" width="40" /></a>
<a href="https://medium.com/uthaan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@uthaan" height="30" width="40" /></a>
<a href="https://www.instagram.com/uthaaniiitm/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="uthaan" height="30" width="40" /></a>
<a href="https://www.youtube.com/c/UthaanIIITM/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="uthaan" height="30" width="40" /></a>
</div>
