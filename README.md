# Client Side - Google Extension x Mesh

This README will guide you through the steps to get the extension up and running with our Mesh Web SDK through a Google Extensin

### Communication with Server App

This extension communicates with a [Server app](https://github.com/ChrisG-Mesh/server-side-google-ext) using React with Next.js and the [Mesh Web SDK](https://docs.meshconnect.com/guides/getting-started). The communication involves sending and receiving events via Socket.io between the server and client apps.

Ensure that the server app is active by running the following command in the server app directory before attempting to use the extension:


```sh
npm run dev
```

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
### Environment Variable

To configure your project to communicate with the server, create a .env file in the root directory of your project. Define the necessary environment variables in this file. Here’s an example of what your .env file should include:

    ```
    # Example environment variables
    REACT_APP_PORTAL_BASE_URL=http://your-server-url.com
    ```

Replace http://your-server-url.com with the actual URL where your server is currently hosted. This URL should point to the server app that your client-side extension interacts with.

### Development

1. **Build the React application and the background script:**

    ```sh
    npm run build-and-webpack
    ```

    This will create a `build` directory with the production build of your app and the necessary Webpack background build.

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
