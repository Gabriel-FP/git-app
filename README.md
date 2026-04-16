# 🐙 Git App

> A React application that fetches and displays GitHub user profile data using the GitHub REST API.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

**Git App** is a lightweight front-end application built with React and Vite. It consumes the public [GitHub REST API](https://docs.github.com/en/rest) to retrieve and display profile information for a given GitHub user — including their avatar, bio, public repositories count, followers, and following.

---

## ✨ Features

- 🔍 Fetches real-time GitHub user data via the public API
- 🖼️ Displays avatar, name, and profile stats
- ⚡ Blazing-fast development with Vite HMR
- 🧹 Code quality enforced with ESLint

---

## 🖥️ Demo

> Run locally following the steps in [Getting Started](#getting-started).

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.4 | UI library |
| [Vite](https://vitejs.dev/) | ^8.0.4 | Build tool & dev server |
| [ESLint](https://eslint.org/) | ^9.39.4 | Static code analysis |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) **v18+**
- [npm](https://www.npmjs.com/) **v9+** *(comes with Node.js)*

Verify your versions:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Gabriel-FP/git-app.git
cd git-app
```

2. **Install dependencies:**

```bash
npm install
```

### Running the App

**Development mode** (with Hot Module Replacement):

```bash
npm run dev
```

Open your browser at `http://localhost:5173` to see the app.

**Production build:**

```bash
npm run build
```

**Preview the production build:**

```bash
npm run preview
```

---

## 📁 Project Structure

```
git-app/
├── public/
│   ├── favicon.svg         # App favicon
│   └── icons.svg           # SVG icon assets
├── src/
│   ├── assets/             # Static assets (images, SVGs)
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

---

## 🌐 API Reference

This project uses the **GitHub REST API** (no authentication required for public data).

### Fetch User Profile

```
GET https://api.github.com/users/{username}
```

**Example response fields used:**

| Field | Type | Description |
|---|---|---|
| `name` | `string` | The user's display name |
| `avatar_url` | `string` | URL of the user's profile picture |
| `bio` | `string` | The user's biography |
| `public_repos` | `number` | Number of public repositories |
| `followers` | `number` | Number of followers |
| `following` | `number` | Number of accounts the user follows |

> ⚠️ **Rate Limiting:** The GitHub API allows up to **60 unauthenticated requests per hour** per IP address. For higher limits, consider adding a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts the Vite dev server with HMR |
| Build | `npm run build` | Bundles the app for production |
| Preview | `npm run preview` | Serves the production build locally |
| Lint | `npm run lint` | Runs ESLint on the source files |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and React</p>
