This project was made with [Create React App](https://github.com/facebook/create-react-app).

## Task: 
- No hardcoded names and elements UI: 
All UI elements (lists, paragraphs, filters) and the content 
should be rendered according to the JSON data;
The initial render of the App is empty with the only 'loading' icon;
- to realise the CV project on React with the State operations;
- to temporary avoid real server fetching operations; To prepare the 
structured JSON file to be fetched from /build;
- to set the localStorage with JSON data for the future sessions;
- to renew the localStorage, if the creation date of the localStorage
 is more than 1 day;
- to set the State data with the initial localStorage data;
  All components should take the data only from the State;
- to fix the height of the App with the scroll ability, if 
the inside data is overflows the fixed height.
- on the Component mount of the App - to check for the localStorage data 
or, if not, to fetch/axios the JSON data for rendering of the Components;
- if rendering JSON data contains refs on pdf files to be downloaded - 
then to create downloadable <a> links with href to the fetched pdf files;
The pdf files for the <a> links should be fetched and stored separately;
- Fetched pdf files should be stored in the localStorage for the next sessions;
The files should be also validated with the creation date and restored if
necessary;
- to imitate the loading time, showing the loading icon;

/////////////////////////////////////////////////////////////////


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
