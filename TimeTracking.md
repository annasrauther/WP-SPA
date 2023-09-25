# WP-SPA: Efforts and Time Tracking Document

## About This Document

**Purpose:** This document records the tasks and efforts invested in the development of the WP-SPA project. It offers an overview of tasks, time tracking, and the developer's thoughts on the experience. This record serves as a valuable reference for understanding the project's journey.

### Task 1: Project Analysis (3 hours)

- **Objective:** Understanding project requirements.
- **Description:**
  - Conduct analysis of project specifications.
  - Identify potential challenges and roadblocks.
  - Gather essential information to lay the foundation.

### Task 2: Project Setup (1.5 hours)

- **Objective:** Scaffold the project and set up development tools.
- **Description:**
  - Initialize the React TypeScript project, using CRA.
  - Configure development tools: TypeScript, ESLint, Prettier, and Husky.
  - Set up Git with automation through Husky, Commitlint, and lint-staged.

### Task 3: Component Preparation (1.5 hours)

- **Objective:** Create core components and navigation structure.
- **Description:**
  - Develop Home, About, and Login page level components for the user interface.
  - Implement client-side routing using `react-router-dom` for seamless navigation.
  - Craft a catch-all route for pages to fetch data from the WordPress API based on slug.

### Task 4: Data Fetching and Authentication (2 hours)

- **Objective:** Integrate the WordPress API for data and authentication.
- **Description:**
  - Define service layers to efficiently fetch data from API endpoints.
  - Retrieve and present blog posts and page data from the WordPress API.
  - Implement JWT token-based authentication for secure login and logout.
  - Handle API errors and token expiration scenarios.

### Task 5: Rendering and Modularity (3 hours)

- **Objective:** Render data and ensure code modularity.
- **Description:**
  - Display blog content within components for an engaging user experience.
  - Divide components into smaller, reusable units to enhance maintainability.
  - Strengthen code quality through interfaces for type checking.

### Task 6: State Management (2 hours)

- **Objective:** Efficiently manage application state and user authentication.
- **Description:**
  - Set up React context for streamlined state management and data consistency.
  - Manage user authentication processes, safeguarding user data.
  - Enhance code modularity through Custom Hooks (useAuth, usePosts, etc.) for ease of maintenance and readability.

### Task 7: Quality Assurance (1 hour)

- **Objective:** Ensure code quality and perform rigorous testing.
- **Description:**
  - Perform code linting and formatting checks to maintain code cleanliness.
  - Address warnings and adhere to industry best practices.
  - Conduct manual testing to identify and resolve potential issues.

### Task 8: Documentation (3 hours)

- **Objective:** Create comprehensive project documentation.
- **Description:**
  - Add JSDoc comments to enhance code clarity and understanding.
  - Inline comments for better code comprehension.
  - Add a `README.md` and `TimeTracking.md` files for seamless project exploration.

### Task 9: Review and Submission (1.5 hours)

- **Objective:** Review the project and prepare for submission.
- **Description:**
  - Conduct a thorough project review to identify improvements.
  - Commit code and organize a structured submission email for the hiring team.

## Efforts Spent

**Purpose:** Time spent on the project is as follows:

- **Development Time:** 12 hours
- **Analysis:** 3 hours
  - Requirements understanding and planning.
- **Documentation:** 3 hours
  - Comprehensive documentation of code and project.
- **Communication:** 1 hour
  - Email conversations and collaboration with 10up Team.
- **Total Time Spent:** 20 hours (Ballpark)

## My Thoughts

- I enjoyed working on this project, and I learned a few things.
- Managed to score a good Lighthouse score of almost 100% on all the pages. Except SEO, which is not applicable for this project.
- I had to setup a Custom WordPress REST API, because the provided API in the assignment was not working. So I had to setup JWT Authentication and CORS on my custom WordPress Site and use it as API instead.
- The project is adaptable, updates are as simple as tweaking the .env variable if we need this to point to a different WordPress API domain.
- My personal preference for these type of projects which are more content-driven, I would consider using Next.js (App Router) for future projects to enhance the developer experience, performance and SEO by utilizing server-side rendering (Incremental Static Regeneration).
- I haven't added Tests, but I would add them if needed for a production-ready application.
- I felt the project was a bit challenging, specifically the building this assignment using minimal dependencies. So I had used natively available React APIs and Hooks to build this project. Just one dependency for routing, which is `react-router-dom`.
- Just added one single Error Boundary component, but I would add more for component level if needed.
