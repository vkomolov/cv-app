///node_modules
import React from 'react';
import PropTypes from 'prop-types';

//styles
import styles from './ContentItem.module.scss';

/**@description stateless; it renders the tags according to the props.data structure:
 * - the object may have: <li>, <p>, <h3>, <span>, <a> renderings;
 * @param {object} item; //data for the separate item of the fetched content;
 * @return {object} JSX Object;
 * */
const ContentItem = ({ item }) => {
    let heading,
        comments,
        remark,
        content;

    if (item && Object.keys(item).length) {
        heading = item.subheading
            ? <h3>{item.subheading}</h3>
            : null;
        comments = item.comments
            ? <h4>{item.comments}</h4>
            : null;
        remark = item.remark
            ? <div className={styles.remarkCol}>
                    <span className={styles.remark}>
                        {item.remark}
                    </span>
            </div>
            : null;

        if (Array.isArray(item.p)) {
            content = item.p.map((item, index) => {
                return <p key={index}>{item}</p>
            });
        }
        if (Array.isArray(item.a)) {
            const liArr = item.a.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.path}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={styles.link}
                        >
                            {item.title}
                        </a>
                    </li>
                )
            });
            content = (
                <ul>
                    {liArr}
                </ul>
            );
        }
        if (Array.isArray(item.li)) {
            const liArr = item.li.map((item, index) => {
                return <li key={index}>{item}</li>
            });
            content = (
                <ul>
                    {liArr}
                </ul>
            );
        }
        if (Array.isArray(item.file)) {
            const liArr = item.file.map((it, index) => {
                let fileName = it.src.split('/').slice(-1)[0];
                return (
                    <li key={index} >
                        <a href={it.src}
                           title={`Save ${it.title} (pdf format)`}
                           className={styles.link}
                           download={fileName}>
                            {it.title}
                        </a>
                    </li>
                )
            });

            content = (
                <ul id="file-list">
                    {liArr}
                </ul>
            );
        }
    }
    return (
        <div className={styles.topWrapper}>
            {remark}
            <div className={styles.contentWrapper}>
                {heading}
                {comments}
                {content}
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