///utils
import { getLocalStorage, setLocalStorage, getAxios } from './index';

export const getAndStore = async ( path, timeLimit=1, extension='' ) => {
	const dataName = path.split('/').slice(-1)[0];
	
    let localData = getLocalStorage( dataName, timeLimit );
    if ( localData ) { //it returns obj or false
        return localData.data;
    }

    return await getAxios(path, extension )
        .then( data => {
	        (Object.keys(data).length) && setLocalStorage( dataName, data );
	        return data;
        } )
};