///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///components
import AsideItem from '../AsideItem';

//styles
import styles from './AsideContent.module.scss';

/**@description it renders the array of AsideItem components, which taken
 * from the props.asideContent;
 * @param {object} asideContent;
 * @return {object} JSX object
 * */
const AsideContent = ({ asideContent }) => {
    let contentArr = null;

    if (asideContent && Object.keys(asideContent).length) {

        contentArr = Object.keys(asideContent).map(key => {
            if (Array.isArray(asideContent[key])) {
                return asideContent[key].map((item, index) => {
                    return <AsideItem key={index}{...{ item }}/>;
                });
            } else {
                return null
            }
        });
    }

    return (
        <div className={styles.topWrapper}>
            {contentArr}
        </div>
    );
};
export default AsideContent;

AsideContent.propTypes = {
    asideContent: PropTypes.shape({
        details: PropTypes.arrayOf(PropTypes.object),
        skills: PropTypes.arrayOf(PropTypes.object),
    })
};