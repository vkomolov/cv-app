///node_modules
import React, { Component } from "react";
import PropTypes from 'prop-types';

///styles
import styles from './GraphBlock.module.scss';


/**@description statefull; props.score is rendered to <div> with
 * the width = props.score + 'px';
 * @param {string} score; the number in 'string' is taken for
 * the width of the block in px;
 * @return {object} JSX object;
 * */
export default class GraphBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initiated: false
        };
    }

    /**@description it creates the delay effect for the width of the tag;
     * */
    componentDidMount() {
        setTimeout(()=> this.setState({initiated: true}), 500);
    }

    render() {
        let scoreWidth = {
            width: `${this.props.score}%`
        };

        let indicator = this.state.initiated
         ? <div className={styles.score} style={scoreWidth} />
         : <div className={styles.score} />;

        return (
            <div className={styles.graphBlock}>
                {indicator}
            </div>
        );
    }
}
GraphBlock.propTypes = {
    score: PropTypes.string
};