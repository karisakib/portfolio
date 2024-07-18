[![Netlify Status](https://api.netlify.com/api/v1/badges/ed880f78-70a0-457c-b660-ab5eaa6b4646/deploy-status)](https://app.netlify.com/sites/karisakib/deploys)

# Portfolio

Welcome to my React Portfolio project! This project showcases my skills and experiences as a developer, featuring a collection of blog posts, books I've read, and useful resources for development and design.

## Table of Contents

- [Project Setup](#project-setup)
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Hosting](#hosting)
- [Data Structure](#data-structure)
- [Resources](#resources)

## Project Setup

This project uses React and various other libraries to create a dynamic and interactive portfolio. Below are the details of the project's dependencies and devDependencies.

## Features

- **Dynamic Blog Posts**: JSON data for blog posts is stored in the `content` folder at the root of the project.
- **Books Collection**: A collection of books I've read, categorized and displayed in the portfolio.
- **Resource Collections**: Various resources for development, design, and other fields are organized and displayed for easy access.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/karisakib/portfolio.git
```

2. Navigate to the project directory:

```bash
cd portfolio
```

3. Install the dependencies:

```bash
npm install
```

## Scripts

Here are the scripts you can use to manage the project:

`dev`: Starts the development server.
`build`: Builds the project for production.
`lint`: Runs ESLint to lint the codebase.
`preview`: Previews the built project locally.

To run any of these scripts, use the following command:

```bash
npm run <script-name>
```

For example, to start the development server:

```bash
npm run dev
```

## Hosting

This project is hosted on Netlify. You can access the live version [here](https://karisakib.com).


## Data Structure

The project organizes data in JSON format. Blog posts, books, and resources are structured as follows:

### Blog Posts
Blog posts are stored as JSON objects in the content folder. Each post contains metadata and content.
```json
{
  "slug": "my-first-blog-post",
  "date": "July 17, 2024",
  "title": "My First Blog Post",
  "description": "This is the description of my first blog post.",
  "body": "This is the body of my first blog post. It contains all the details and information about the topic I am discussing.",
  "paragraphs": [
    "This is the first paragraph of my blog post.",
    "This is the second paragraph of my blog post."
  ]
}
### Books
Books I've read are organized into categories and stored in JSON format, making it easy to update and display.

```json
{
  "slug": "clean-code",
  "date": "July 17, 2024",
  "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
  "author": "Robert C. Martin",
  "review": "Clean Code is a must-read for any developer who cares about writing quality code. The book provides practical advice on how to write clean, readable, and maintainable code.",
  "notes": [
    "Functions should be small and do one thing only.",
    "Meaningful names are crucial for code readability.",
    "Code should be simple and straightforward."
  ]
}
```

### Resources
Resources for various topics are categorized and stored in a JSON structure. Below is an example structure:

```json
{
  "section": "Design",
  "resources": [
    {
      "title": "A List Apart",
      "url": "https://alistapart.com/",
      "description": "Explores the design, development, and meaning of web content, with a special focus on web standards and best practices."
    },
    {
      "title": "Smashing Magazine",
      "url": "https://www.smashingmagazine.com/",
      "description": "An online magazine for professional web designers and developers, with a focus on useful techniques, best practices, and valuable resources."
    },
    {
      "title": "Behance",
      "url": "https://www.behance.net/",
      "description": "A platform to showcase and discover creative work, featuring a variety of design projects and portfolios."
    }
  ],
  "books": [
    {
      "title": "Design of Everyday Things",
      "url": "https://booklink.com/design-of-everyday-things",
      "description": "A classic book on design by Don Norman."
    },
    {
      "title": "Don't Make Me Think",
      "url": "https://booklink.com/dont-make-me-think",
      "description": "A common sense approach to web usability by Steve Krug."
    },
    {
      "title": "Hooked: How to Build Habit-Forming Products",
      "url": "https://booklink.com/hooked",
      "description": "A guide to creating products that people love by Nir Eyal."
    }
  ]
}
```
