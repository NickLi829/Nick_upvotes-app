# Nick Upvotes App

This project is a frontend application for managing and displaying upvotes, built with modern web technologies.

## Getting Started

To set up and run this project locally or in a GitHub Codespace, please follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/NickLi829/Nick_upvotes-app.git
cd Nick_upvotes-app
npm install
```

### Running the App

After installing the dependencies, start the development server:

```bash
npm run dev
```

The app should now be running at:

```
http://localhost:5173
```
(or the port indicated in your terminal)

### Notes

- If you encounter any issues during installation or running, please ensure your Node.js version is compatible.
- No additional environment variables are required to run the project.

### Special Note for GitHub Codespace Users

If you encounter the following error when starting the dev server:

```
TypeError: crypto$2.getRandomValues is not a function
```

This is due to the default Node.js version in Codespaces being too low. Please follow these steps to resolve:

1. Open the terminal in Codespace.
2. Install `nvm` (Node Version Manager) if it is not already installed:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
```

3. Install and use a higher version of Node.js (e.g., version 20):

```bash
nvm install 20
nvm use 20
```

4. Reinstall dependencies and restart the dev server:

```bash
npm install
npm run dev
```

This should fix the issue and allow the project to run properly in GitHub Codespaces.

## License

This project is licensed under the MIT License.
