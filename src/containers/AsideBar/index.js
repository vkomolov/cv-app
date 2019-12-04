///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///components
import AsideContent from '../../components/AsideContent';
import LoadingAlert from '../../components/LoadingAlert';

///styles
import styles from './AsideBar.module.scss';

/**@description takes the props with:
 * - the filter,
 * - callback to set the filter
 * - the initial data from api request or the localStorage;
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
    const { filter, data, setFilter,  } = attr;

    let fullName,
        imageContainer,
        sectionList,
	    sections,
        asideContent;

    /**if data is not empty Object else to render <LoadingAlert />
     * */
    if (data && Object.keys(data).length) {
        const sectionsArr = Object.keys(data).filter(key => {
            switch( key ) {
                case('fullName'): {
                    fullName = <h1>{ data[key] }</h1>;
                    return false;
                }
                case('creationDate'): {
	                return false;
                }
                case('photo'): {
                    imageContainer = (
                        <div className={styles.imageContainer}>
                            <img src={ data[key] } alt="person" />
                        </div>
                    );
	                return false;
                }
                default: {
                    return key;
                }
            }
        });
        sections = sectionsArr.map((i, key) => {
	        let specClass = (i === filter)
		        ? `${styles.sectionName} ${styles.specClass}`
		        : `${styles.sectionName} ${styles.toBeHovered}`;
	        return (
		        <li key={key} className={specClass}
		            data-value={i} onClick={(e)=>setFilter(e)}
		        >
			        { i }
		        </li>
	        );
        });
        
        sectionList = (
            <ul className={styles.sectionList}>
                { sections }
            </ul>
        );

        if (filter && data[filter]) {
            asideContent = data[filter].aside;
        }

    }
    else {
	    imageContainer = <LoadingAlert />;
    }

    return (
        <div className={styles.asideBar} >
            { fullName }
            { imageContainer }
            { sectionList }
            {
            	asideContent
                && Object.keys( asideContent ).length
	            && <AsideContent { ...{ asideContent } }/>
            }
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