///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///components
import GraphBlock from '../GraphBlock';

//styles
import styles from './AsideItem.module.scss';

/**@description stateless; to render the argument according to its structure:
 * - the object may have: <span> and <GraphBlock /> renderings;
 * @param {object} item;
 * @return {object} JSX Object;
 * */
const AsideItem = ({ item }) => {
    let heading = null;
    let content = null;

    if (item && Object.keys(item).length) {

        heading = <h3>{item.title}</h3>;

        if (typeof item.details === "string") {
            content = <span>{item.details}</span>;
        }

        if (Array.isArray(item.details)) {
            content = item.details.map((data, index) => {

                return (
                    <div key={index}>
                        <span className={styles.subHeading} >
                            {data.title}
                        </span>
                        <GraphBlock score={data.details}/>
                    </div>
                );
            });
        }
    }

    return (
        <div className={styles.topWrapper}>
            {heading}
            {content}
        </div>
    );
};
export default AsideItem;

AsideItem.propTypes = {
    item: PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            details: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array
            ])
        }
    )
};