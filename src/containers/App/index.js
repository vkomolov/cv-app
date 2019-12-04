///node_modules
import React, { Component } from 'react';

///components
import AsideBar from '../../containers/AsideBar';
import ContentBar from '../../containers/ContentBar';
import ErrorPopup from '../../components/ErrorPopup';

///utils
import { getAndStore } from '../../utils/services/userService';

///styles
import styles from './App.module.scss';

/**@description
 * - AsideBar, aside column with fixed width;
 * - ContentBar, main content column with calc width: 100% - AsideBar;
 * @return {object} JSX <div/> comprising two columns in flex;
 * */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            filter: "personal",
            data: {}
        };

        this.dataPath = "cvData/cv";
    }

    componentDidMount() {
	    getAndStore(this.dataPath)
		    .then(data => {
			    /*this.setState({
				    data
			    });*/
		    	setTimeout(() => {
				    this.setState({
					    data
				    });
			    }, 1000); //simulating loading process
		    })
		    .catch(error => {
		        console.error( error );
			    this.setState({
				    error
			    })
		    });
    }

    /**@description
     * - to take the data-value attribute from the event source;
     * - to set the State.filter with the data-value;     *
     * */
    setFilter = ({ target }) => {
        this.setState({
            filter: target.dataset.value
        });
    };

    render() {
	    const attr = {
		    filter: this.state.filter,
		    data: this.state.data,
		    setFilter: this.setFilter,
	    };

        return (
	        <div id="app" className={ styles.totalWrapper }>
		        { this.state.error && <ErrorPopup error={ this.state.error } /> }
		        <AsideBar { ...{ attr } } />
		        <ContentBar { ...{ attr } } />
	        </div>
        );
    }
}
export default App;
