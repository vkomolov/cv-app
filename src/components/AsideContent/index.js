///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///components
import AsideItem from '../AsideItem';

//styles
import styles from './AsideContent.module.scss';

/**@description it renders the array of AsideItem components, which taken from props.asideContent;
 * @param {object} asideContent;
 * @return {object} JSX object
 * */
const AsideContent = ({ asideContent }) => {
    const contentArr = Object.keys(asideContent).filter(key => {
        return Array.isArray(asideContent[key]);
    });
    
    const asideContentArr = contentArr.map(el => {
        return asideContent[el].map(( item, index ) => (
            <AsideItem key={index} {...{ item }} />
        ));
    });

    return (
        <div className={styles.topWrapper}>
            { asideContentArr }
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