///node_modules
import React, { Component } from 'react';

///components
import AsideBar from '../../containers/AsideBar';
import ContentBar from '../../containers/ContentBar';

///utils
import { getAxios, setLocalStorage } from '../../utils/services';

///styles
import styles from './App.module.scss';

/**@description statefull, it contains the state which is sent to the children:
 * - AsideBar, aside column with fixed width;
 * - ContentBar, main content column with calc width: 100% - AsideBar;
 * @return {object} JSX <div/> comprising two columns in flex;
 * */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            filter: "personal",
            data: {}
        };

        this.storageName = "cv";
        this.source = `../cvData/${this.storageName}`;
    }
    //////////

    /**@description
     * - to promise the request of the JSON file;
     * - to set the localStorage if the creation date is expired;
     * - to set the State: error, data of App;     *
     * */
    initAxios() {
        getAxios( this.source )
            .then(
                data => {
                    setLocalStorage( this.storageName, data );

                    this.setState(
                        {
                            data,
                            error: null
                        }
                    );
                },
                error => {
                    this.setState(
                        {
                            error,
                            data: null
                        }
                    );
                })
    };

    /**@description
     * - to check out the localStorage and fetch the data if
     * the localStorage with the name 'storageName' does not exist;
     * - if the creation date expires, then to refetch JSON
     * by this.initFetch;
     * - to set the state of App
     * */
    componentDidMount() {
        const storage = localStorage.getItem( this.storageName );
        let data;

        if ( storage ) {
            data = JSON.parse( storage );

            const creationDate = new Date( data.creationDate );
            const currentDate = new Date();

            /**the creationDate expires in 1 day
             * setting Timeout for fetching time simulation
             * */
            if (((currentDate - creationDate)/1000/60/60/24) < 1) {
                this.setState(
                    {
                        data
                    }
                );
            } else {
                setTimeout(() => { ///fetching time imitation
                    this.initAxios();
                }, 1000);
            }
        }
        else {
            setTimeout(() => { ///fetching time imitation
                this.initAxios();
            }, 1000);
        }
    }

    /**@description
     * - to take the data-value attribute from the event source;
     * - to set the State.filter with the data-value;
     * @param {SyntheticEvent} e:target;
     * */
    setFilter = ({ target }) => {
        this.setState({
            filter: target.dataset.value
        });
    };

    render() {
        const attr = {
            ...this.state,
            setFilter: this.setFilter
        };

        return (
            <div id="app" className={styles.totalWrapper}>
                <AsideBar { ...{ attr } } />
                <ContentBar { ...{ attr } } />
            </div>
        );
    }
}
export default App;

/*///dev
function log(it) {
    console.log(it);
}
function ping() {
    console.log("ping");
}*/
