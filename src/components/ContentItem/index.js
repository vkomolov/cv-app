///node_modules
import React from 'react';
import PropTypes from 'prop-types';

///styles
import styles from './ContentItem.module.scss';

/**@description it renders the tags according to the props.data structure:
 * - the object may have: <li>, <p>, <h3>, <span>, <a> renderings;
 * @param {object} item; //data for the separate item of the fetched content;
 * @return {object} JSX Object;
 * */
const ContentItem = ({ item }) => {
    let heading,
        comments,
        remark,
	    contentTextArr,
	    linkList,
	    list,
	    fileList;

    if (item && Object.keys(item).length) {
        heading = item.subheading && <h3>{item.subheading}</h3>;
        comments = item.comments && <h4>{item.comments}</h4>;
        remark = item.remark
            && <div className={styles.remarkCol}>
                    <span className={styles.remark}>
                        {item.remark}
                    </span>
               </div>;

        if (Array.isArray(item.p)) {
            contentTextArr = item.p.map(( el, index ) => {
                return <p key={ index }>{ el }</p>
            });
        }
        
        if (Array.isArray(item.a)) {
            const linkArr = item.a.map((it, index) => (
                <li key={index}>
                    <a href={ it.path }
                       target="_blank"
                       rel="noopener noreferrer"
                       className={styles.link}
                    >
                        { it.title }
                    </a>
                </li>
            ));
	
	        if ( linkArr.length ) {
		        linkList = <ul>{ linkArr }</ul>;
	        }
        }
        
        if (Array.isArray(item.li)) {
            const listArr = item.li.map((item, index) => {
                return <li key={index} >{item}</li>
            });
            
	        if ( listArr.length ) {
		        list = <ul>{ listArr }</ul>;
	        }
        }
	
	    if (Array.isArray(item.file)) {
		    const filesArr = item.file.map((it, index) => {
			    return (
				    <li key={ index } >
					    <a href={ it.path }
					       title={`Save ${it.title} (pdf format)`}
					       className={ styles.link }
					       download={ true }>
						    { it.title }
					    </a>
				    </li>
			    )
		    });
		
		    if ( filesArr.length ) {
			    fileList = <ul>{ filesArr }</ul>;
		    }
	    }
    }
    
    return (
        <div className={styles.topWrapper}>
            { remark }
            <div className={styles.contentWrapper}>
                { heading }
                { comments }
                { contentTextArr }
	            { linkList }
	            { list }
	            { fileList }
            </div>
        </div>
    );
};

export default ContentItem;

ContentItem.propTypes = {
    item: PropTypes.shape(
        {
            remark: PropTypes.string,
            subheading: PropTypes.string,
            p: PropTypes.arrayOf(PropTypes.string),
            li: PropTypes.arrayOf(PropTypes.string),
            a: PropTypes.arrayOf(PropTypes.object),
            file: PropTypes.arrayOf(PropTypes.object)
        }
    )
};