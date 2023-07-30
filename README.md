# React Portfolio Page

This is a portfolio web application built using the React front-end framework. The project includes various components that provide functionalities such as displaying essays, project previews, contact information, and more. The application also interacts with the GitHub API to fetch and display repositories.

## Project Structure

The project has the following directory structure:

```
Portfolio/
|-- node_modules/
|   |-- ...
|
|-- static/
|   |-- ...
|
|-- public/
|   |-- ...
|
|-- src/
|   |-- App.js (App entry point)
|   |-- App.css
|   |-- index.js
|   |-- index.css
|   |-- setupTests.js
|   |-- README.md
|   |
|   |-- components/
|   |   |-- Header.js
|   |   |-- Header.css
|   |   |-- Footer.js
|   |   |-- Footer.css
|   |   |-- Homepage.js
|   |   |-- Homepage.css
|   |   |-- Repositories.js
|   |   |-- Repositories.css
|   |   |-- About.js
|   |   |-- About.css
|   |   |-- Contact.js
|   |   |-- Contact.css
|   |   |-- RepositoryList.js
|   |   |-- RepositoryList.css
|   |   |-- RepositoryDetails.js
|   |   |-- RepositoryDetails.css
|   |   |-- Warning.js
|   |   |-- Warning.css
|   |   |-- Essay.js
|   |   |-- Essay.css
|   |   |-- HomepageHero.js
|   |   |-- HomepageHero.css
|   |   |-- AboutPreview.js
|   |   |-- AboutPreview.css
|   |   |-- ProjectPreview.js
|   |   |-- ProjectPreview.css
|   |   |-- ContactPreview.js
|   |   |-- ContactPreview.css
|   |   |-- Essay1.js
|   |   |-- Essay1.css
|   |   |-- Essay2.js
|   |   |-- Essay2.css
|   |   |-- Essay3.js
|   |   |-- Essay3.css
|   |   |-- README.md
|
|-- .env
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- package-lock.json
|-- package.json
|-- README.md
|-- index.html (Web entry point)
|-- ...(images)
```


## Installation and Usage

1. Clone the repository: `git clone https://github.com/SymbioticLove/Portfolio.git`
2. Navigate to the project directory: `cd c:\Portfolio`
3. Install dependencies: `npm install react-router-dom`
4. Run the development server: `npm start`

The application will be accessible at `http://localhost:3000`.

## Features

- The application consists of different pages:
  - **Home page:** Displays a hero section, about preview, project preview, essay, and contact preview.
  - **About page:** Contains information about the author's background and skills.
  - **Projects page:** Fetches repositories from GitHub API and displays project previews.
  - **Contact page:** Provides contact information.
- The app uses React Router to handle navigation and display the appropriate components for each page.
- The `HomepageHero`, `AboutPreview`, `ProjectPreview`, `Essay`, `ContactPreview`, and `Warning` components are used to structure the home page.

## External Dependencies

The project uses the following external libraries:

- `react-router-dom`: For client-side routing.
- `web-vitals`: For collecting and reporting web-vital metrics.

## Contributing

Contributions to this project are welcome. If you find any bugs, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request.

## License

Copyright 2023 Matthew Ford

All rights reserved. No part of this project, including but not limited to the code and associated files, may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author, except for brief quotations or other non-commercial uses permitted by copyright law.

Unauthorized use, reproduction, distribution, or transmission of this project or the projects contained herein may result in severe civil and criminal penalties and will be prosecuted to the maximum extent possible under the law.
