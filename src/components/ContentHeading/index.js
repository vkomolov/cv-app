///node_modules
import React from 'react';

//styles
import styles from './ContentHeading.module.scss';

function ContentHeading({heading}) {
    return (
        <h2 className={styles.heading}>
            { heading }
            <img src="img/react.svg"
                 className={styles.heading__icon}
                 alt="React Icon"
            />
        </h2>
    );
}

export default ContentHeading;