# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


# Posts Explorer App

A clean and scalable React + TypeScript app for exploring posts and their authors, built using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). This app demonstrates modern React patterns, API handling, context-based state management, and thoughtful UX design.

---

##  Features

- View a list of posts from the API
- Fetch and display author details (name, email, company, etc.)
- Click a post to view full details
- Add a new post (stored locally)
- Toggle between dark and light theme (persisted in localStorage)
- Real-time search by post title
- Graceful error handling and loading indicators

---

## ⚙️ Tech Stack

- **React** (with functional components and hooks)
- **TypeScript**
- **React Router v6.4+** (with loaders and error boundaries)
- **Context API + useReducer** (for global state)
- **CSS Modules** (for scoped, maintainable styles)
- **Custom hooks** (for data fetching and logic separation)
- **JSONPlaceholder API** (for fake posts and user data)

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/posts-explorer.git
cd posts-explorer

### 2. Install dependencies
npm install
# or
yarn

### 3. Run the app
npm run dev
# or
yarn dev

The app will start at http://localhost:5173 (if using Vite).

## Folder Structure Overview
bash

src/
│
├── components/          # Reusable UI components (PostItem, Modal, etc.)
├── pages/               # Route-level views (PostDetailPage, etc.)
├── store/               # Contexts and reducers (Posts, Authors, Theme)
├── hooks/               # Custom React hooks (useHttp, usePostDetail)
├── util/                # Helper functions (e.g. fetchAuthor)
├── UI/                  # Generic UI elements (Button, Input, Modal)
├── App.tsx              # Main app + routing
└── index.tsx            # App entry point