///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///styles
import styles from './ErrorPopup.module.scss';

const ErrorPopup = ({ error }) => {
	return (
		<div className={ styles.wrapper }>
			<span className={ styles.popup }>
				{ error.message }
			</span>
		</div>
	);
};
export default ErrorPopup;

ErrorPopup.propTypes = {
	error: PropTypes.object
};