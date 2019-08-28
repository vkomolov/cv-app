///node_modules
import React from 'react';
import { render } from 'react-dom';

///containers
import App from './containers/App';

///styles
import './utils/global_styles/index.scss';

render(
    <App />,
    document.getElementById('root')
);