If you want to contribute to this project, go through the following instructions.

## Getting Started

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

1. Create a `.env` fle in the root folder. Copy the content of `.env.example` into the `.env` file. Set up the custom API keys as mentioned there.
2. Run the project locally to access the backend functionality of the website

```sh
nodemon start
```



## Creating an issue

If you find any bug or want to add/improve any feature in the application, create a new issue. Follow the instructions below while creating the issue.

- Create a branch with a one or two word description of the issue and issue number. For example, if the issue is about adding a button for login and issue number is 34, then name the branch as `login-btn-34`. Commit your changes in the branch and make a PR from your repository to this main reporsitory.
- Mention the issue type in the issue title.Choose only from the following 3 types - `Bug`,`Feature`,`Improve` For example, if the issue is about fixing any bug then the title will be `[Bug]<one-line description of the issue>`.
- Make sure you mention the following sections in the issue description
  - What is the issue?
  - How to reproduce the issue?
  - What is the expected behaviour?
  - Describe a solution you would like
  - Additional Context (Optional)

  Try to add screenshots or error messages for a better understanding of the issue.


## Making a pull request

While making a Pull Request, make sure to follow the points below:
- In the title for the pull request, mention the issue number that the PR is for. Any PR without a dedicated issue will not be considered. If you are making a PR for issue 12, then the title for the PR will be `Fix #12:<one line description of the PR>`
- Mention the following points in the PR description
  - Describe the changes you have made
  - Screenshots
  - Additional Context (Optional)