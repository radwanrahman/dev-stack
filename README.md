# Dev Stack Builder

Dev Stack Builder is a simple React website where users can explore different
web development technologies and build their own technology stack.

Users can see the technology details, add technologies to their stack, remove
them, and get notifications for different actions.

## Live Website

https://radwanrahman.github.io/dev-stack/

## GitHub Repository

https://github.com/radwanrahman/dev-stack

## Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS
- React Toastify
- JSON
- GitHub Pages

## Features

1. Users can explore different technologies by category.
2. Users can add technologies to their own stack and remove them anytime.
3. The website is responsive and works on desktop, tablet, and mobile devices.

## Main Features

- Technology data is loaded from a JSON file.
- Technology cards show name, category, description, difficulty, rating, and badge.
- Users can add technologies to their stack.
- Duplicate technologies cannot be added.
- Users can remove individual technologies.
- Users can remove all selected technologies at once.
- Toast notifications are shown for add, remove, and duplicate actions.
- Loading message is shown while the technology data is loading.
- Responsive navbar and layout.
- Responsive technology cards and stack section.
- GitHub Pages deployment.

## React Questions and Answers

### 1. What is JSX?

JSX is a syntax used in React to write HTML-like code inside JavaScript.
It makes React code easier to read and write.

### 2. What is the difference between State and Props?

State is data that belongs to a component and can change over time.

Props are used to pass data from a parent component to a child component.

### 3. What is useState used for?

`useState` is a React Hook used to store and update data inside a component.

For example, in this project it is used to store the selected technologies.

### 4. What is useEffect used for?

`useEffect` is used to perform side effects in a React component.

In this project, it is used to fetch the technology data from the JSON file
when the website loads.

### 5. What is Prop Drilling?

Prop drilling means passing data through several components using props,
even when the middle components do not need that data.

### 6. Why are keys used in React lists?

Keys help React identify each item in a list.

They help React understand which items have changed, been added, or removed.

### 7. What is a React Fragment?

A React Fragment allows us to group multiple elements without adding an extra
HTML element to the page.

We can write it using:

`<>...</>`

## Project Structure

```text
dev-stack
├── public
│   ├── assets
│   └── data
│       └── technologies.json
│
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── Stack.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .github
│   └── workflows
│       └── deploy.yml
│
├── index.html
├── package.json
├── vite.config.js
└── README.md