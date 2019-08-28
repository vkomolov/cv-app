///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///components
import ContentItem from '../../components/ContentItem';
import ContentHeading from '../../components/ContentHeading';
import LoadingAlert from '../../components/LoadingAlert';

///styles
import styles from './ContentBar.module.scss';

/**@description stateless, takes the props with:
 * - the filter,
 * - function to set the filter
 * - the initial data from fetch or the localStorage;
 * It renders the elements according to the data properties structure;
 * @return {object} JSX <div/> comprising:
 * - <h2/> "title" taken from attr.data;
 * - array of ContentItem components rendered from each property of the object;
 * @param {object} attr: {string} filter, {object} data;
 * */
const ContentBar = ({ attr }) => {
    const { filter, data } = attr;
    let heading,
        contentArr;

    /**if data and data is the Object with the keys
     *
     * else to render <LoadingAlert />
     * */
    if (data && Object.keys(data).length){
        if (filter && data[filter]) {
            const contentData = data[filter].content;

            heading = contentData.title;
            const contentBlock = contentData.details;

            contentArr = contentBlock.map((item, index) => {
                return <ContentItem key={index} {...{item}}/>
            });
        }

    } else {
        contentArr = data && data.error
            ? <div className={styles.errorWrapper}>
                <span>{data.error}</span>
              </div>
            : <LoadingAlert />
    }

    return (
        <div className={styles.totalWrapper}>
            { heading && <ContentHeading {...{heading}} /> }
            <div className={styles.contentWrapper}>
                {contentArr}
            </div>
        </div>
    );
};
export default ContentBar;

ContentBar.propTypes = {
    attr: PropTypes.shape(
        {
            data: PropTypes.object,
            error: PropTypes.bool,
            filter: PropTypes.string,
            setFilter: PropTypes.func,
        }
    )
};