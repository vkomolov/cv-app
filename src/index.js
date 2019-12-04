///node_modules
import React from 'react'; //eslint-disable-line no-unused-vars
import { render } from 'react-dom';

///containers
import App from './containers/App'; //eslint-disable-line no-unused-vars

///styles
import './utils/global_styles/index.scss';

render(
    <App />,
    document.getElementById('root')
);