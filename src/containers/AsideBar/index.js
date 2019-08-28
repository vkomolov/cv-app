///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///components
import AsideContent from '../../components/AsideContent';
import LoadingAlert from '../../components/LoadingAlert';

///styles
import styles from './AsideBar.module.scss';

/**@description stateless, takes the props with:
 * - the filter,
 * - function to set the filter
 * - the initial data from fetch or the localStorage;
 * It renders the elements according to the data properties structure;
 * @return {object} JSX <div/> comprising:
 * - <h1/> "fullName" taken from attr;
 * - <img /> taken from attr;
 * - <ul /> the list of JSON object properties,
 * each <li /> prop value will set the State.filter on click event;
 * - <AsideContent /> with props, which are filtered with the data
 * property from State: filter;
 * @param {object} attr: {string} filter, {func} setFilter;
 * */
function AsideBar({ attr }) {
    const { error, filter, data, setFilter,  } = attr;

    let fullName,
        imageContainer,
        sectionList,
        asideContent;

    /**if data and data is the Object with the keys
     * else to render <LoadingAlert />
     * */
    if (data && Object.keys(data).length) {
        let sections = Object.keys(data).map(key => {
            if (key === "fullName") {
                fullName = <h1>{ data[key] }</h1>;
                return null;    //null will not render

            } else if (key === "creationDate")  {
                return null;

            } else if (key === "photo"){
                imageContainer = (
                    <div className={styles.imageContainer}>
                        <img src={data[key]} alt="person" />
                    </div>
                );
                return null;

            } else {
                let specClass = (key === filter)
                    ? `${styles.sectionName} ${styles.specClass}`
                    : `${styles.sectionName} ${styles.toBeHovered}`;
                return (
                    <li key={key} className={specClass}
                        data-value={key} onClick={setFilter}
                    >
                        {key}
                    </li>
                );
            }
        });

        sectionList = (
            <ul className={styles.sectionList}>
                {sections}
            </ul>
        );

        if (filter && data[filter]) {
            asideContent = data[filter].aside;
        }

    } else {
        if (!error) {
            imageContainer = <LoadingAlert />
        }
    }

    return (
        <div className={styles.asideBar}>
            {fullName}
            {imageContainer}
            {sectionList}
            {asideContent && <AsideContent { ...{ asideContent } }/>}
        </div>
    );
}
export default AsideBar;

AsideBar.propTypes = {
    initialState: PropTypes.shape(
        {
            data: PropTypes.object,
            error: PropTypes.bool,
            filter: PropTypes.string,
            setFilter: PropTypes.func,
        }
    )
};