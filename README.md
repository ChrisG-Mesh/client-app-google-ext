
# Client Side - Google Ext x Mesh

This README will guide you through the steps to get the extension up and running.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed on your development machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/ChrisG-Mesh/client-app-google-ext.git
    cd client-app-google-ext
    ```

2. **Install NPM packages:**

    ```sh
    npm install
    ```

### Development

1. **Build the React application:**

    ```sh
    npm run build
    ```

    This will create a `build` directory with the production build of your app.

2. **Build the background script:**

    ```sh
    npx webpack --config webpack.config.js
    ```

    This will create a `background.bundle.js` file using Webpack.

### Loading the Extension

1. **Open Chrome and navigate to the Extensions page:**

    ```sh
    chrome://extensions/
    ```

2. **Enable Developer Mode:**

    Toggle the "Developer mode" switch in the top right corner.

3. **Load the unpacked extension:**

    Click on the "Load unpacked" button and select the `build` directory.

### Usage

Your extension should now be loaded in Chrome. You can interact with it through the Chrome toolbar.

