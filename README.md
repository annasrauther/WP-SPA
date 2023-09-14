# WP-SPA: WordPress API-Powered React Blog - Assignment Project

## Introduction

I'm thrilled to present the WP-SPA (WordPress Single Page Application) project as part of my assignment for the Senior JavaScript Developer role at 10up. This application showcases my skills in React development, JWT authentication, routing and working with external APIs.

### Project Overview

This project is a React-based single-page application that fetches data from the WordPress API. It allows users to view posts, pages, as well as basic login/logout functionality.

- **Custom Hooks**: I've developed custom hooks to enhance code modularity and reusability. These hooks facilitate data fetching and state management, making the codebase clean and organized.

- **Context for Handling Authentication State**: To manage authentication state effectively, I've implemented a React Context-based solution. This ensures a seamless login/logout experience and token validation.

- **Catch-All Routing for Pages**: I've implemented a catch-all routing strategy to dynamically fetch pages based on their slugs. This approach enhances the scalability of the application and allows for easy addition of new pages.

- **Documentation**: This project is well-documented to ensure that fellow developers can understand and contribute to it effortlessly. Code comments and README.md provide insights into project structure, setup, and usage.

- **Maintainability**: I've followed best practices and coding standards to create a maintainable codebase. Clean code, modular components, and proper code structuring contribute to the project's long-term sustainability.

### What I Haven't Focused On

While this project demonstrates my proficiency in several key areas, there are aspects that I haven't focused on as part of this assignment:

- **Visual Appealing UI**: The assignment's primary focus was on React development, JWT authentication, and API integration. I did not make substantial changes to the provided HTML and CSS, so the visual appeal of the user interface remains unchanged.

- **Unit Tests**: I understand the importance of unit testing for code quality and reliability. However, due to the scope and time constraints of this assignment, I did not have the opportunity to write unit tests. In a real-world scenario, extensive test coverage would be a priority.

- **Atomic Commits**: While I commit regularly to keep track of changes and maintain a detailed project history, I acknowledge that my commits are not strictly atomic. In practice, I prioritize consistent and meaningful commit messages to ensure clarity and transparency in the version control history. Feature branching is not consistently followed in this project.

### Technologies

Here's an expanded overview of the technologies and dependencies used in this project, along with details on how each technology has been implemented:

- **React**: The entire application is built with React, following component-based architecture. React components are used to structure the UI and manage application state. Custom hooks and context are extensively utilized to optimize code organization and data flow.

- **TypeScript**: TypeScript is integrated to provide static typing for a more robust development experience. This helps catch type-related errors during development, improving code quality.

- **React Router DOM**: React Router DOM is employed for client-side routing. The catch-all routing strategy is implemented using React Router, allowing dynamic page retrieval based on slugs.

- **ESLint**: ESLint is configured to enforce coding standards and best practices. It ensures consistent code formatting and helps identify potential issues early in development.

- **Prettier**: Prettier is used for code formatting to maintain a consistent code style throughout the project. It works seamlessly with ESLint to ensure code quality.

- **Husky, Commitlint, lint-staged**: These tools are set up to enforce a standardized commit message format and run linting checks on staged files before commits. This ensures code consistency and quality throughout the development process.

### Installation and Setup

To run this project locally, you'll need to have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/en/download/). npm is bundled with Node.js, so you don't need to install it separately.

Once you have Node.js and npm installed, follow these steps to run the project locally:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/annasrauther/wp-spa
```

2. Navigate to the project directory.

```bash
cd wp-spa
```

3. Install the project dependencies.

```bash
npm install
```

4. Rename the `.env.example` file to `.env` and update the environment variables.

```bash
mv .env.example .env
```

5. Start the development server.

```bash
npm start
```

6. Open the project in your browser.

```bash
http://localhost:3000
```

### Usage

Once you have the project running locally, you can use the following credentials to log in:

- **Username**: `jane`
- **Password**: `12345`

### Final Thoughts

I hope you enjoy exploring this project as much as I enjoyed building it. I look forward to discussing it with you in more detail during our next conversation.

If you have any questions or feedback, please feel free to reach out to me. I'd love to hear from you!
