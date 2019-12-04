///node_modules
import axios  from 'axios';

/**@description it gets the localStorage by name, validating by the time limit;
 * If the time limit is expired, then to return false;
 * If the localStorage does not exist then to return false;
 * Else to return the data;
 * @param { string } name;
 * @param { number } timeLimit: number of days;
 * */
export function getLocalStorage( name, timeLimit=1 ) {
	const storage = localStorage.getItem( name );
	let innData;
	if ( storage ) {
		innData = JSON.parse( storage );
		const creationDate = new Date(innData.creationDate);
		const currentDate = new Date();
		if (((currentDate - creationDate)/1000/60/60/24) > 1) {
			return false;
		}
		return innData;
	}
	return false;
}

/**@description it receives the data and update it with the creation Date
 * and sets the localStorage;
 * */
export function setLocalStorage( name='localData', data ) {
	const dataWithDate = {
		data,
		creationDate: new Date()
	};
	localStorage.setItem(name, JSON.stringify( dataWithDate ));
}

/**@description it promises to get JSON or BLOB response;
 * optional argument 'file' if it is, gives the extension of the file
 * to be requested as blob src;
 * @param {string} source (url and the file name without extension);
 * @param {string} ext extension ('pdf' or 'png' etc... as blob) optional;
 * @return Promise with the response data in JSON or blob (file), or error
 * */
export function getAxios(source, ext='') {
	let extension = ext.length ? `.${ext}` : '.json';
	let responseType = ext.length ? 'blob' : 'json';
	let params = {
		url: `${source}${extension}`,
		method: 'GET',
		responseType,
	};
	
	return axios(params)
		.then(resp => {
			if (responseType === 'blob') {
				return readFileAsDataUrl( resp.data );
			}
			return  resp.data;
		})
}

/**@description: it fetches the data with taken source and params;
 * It contains the inner funcs on passing the Fetch Promise through
 * the response status and parses the response with account to the
 * Content-Type;
 * @param {string} source: url source of the requested data;
 * @param {object} params: it contains the params of the fetch:
 * - method, headers, etc...;
 * @return {object} Promise.resolve, Promise.reject;
 * */
export function initFetch( source, params ) {
	if ( source ) {
		return fetch( source, params )
			.then( status )
			.then( handle );
	}
	throw new Error("no source given to args");
	
	function status( response ) {
		if ( response.ok ) {
			return Promise.resolve( response );
		} else {
			return Promise.reject(new Error( response.statusText ));
		}
	}
	
	function handle( response ) {
		if ( response.headers.get("Content-Type").includes('application/json') ) {
			return response.json();
		} else if ( response.headers.get("Content-Type").includes('text/html') ) {
			return response.text();
		}
		else {
			return URL.createObjectURL(response.blob());
		}
	}
}
/**catch will be taken outer
 * */
export function initAxios( source, params ) {
	if ( source ) {
		return axios( source, params ).then( handle )
	} throw new Error("no source given to args");
	
	function handle( response ) {
		if ( response.headers.get("Content-Type").includes('application/json') ) {
			return response.json();
		} else if ( response.headers.get("Content-Type").includes('text/html') ) {
			return response.text();
		}
		else {
			return URL.createObjectURL(response.blob());
		}
	}
}

/**@description it utilizes FileReader methods to read the file, blob as DataURL;
 * @return string ;
 * */
async function readFileAsDataUrl( file ) {
	const result_base64 = await new Promise( resolve => {
		let fileReader = new FileReader();
		fileReader.onload = (e) => resolve(e.target.result);
		fileReader.readAsDataURL(file);
	} );
	
	return result_base64;
}

/**@description Converts the Date format to yyyy-mm-dd String
 * @param {string} date to localString
 * @param {string} delimiter '-' for joining in String
 * @return {string} String of Date with the delimiter
 * */
export function dateFormat(date, delimiter) {
	let innDate = new Date(date);
	let month = ("0" + (innDate.getMonth() + 1)).slice(-2); //if 2 digits then without 0
	let day = ("0" + innDate.getDate()).slice(-2);
	return [innDate.getFullYear(), month, day].join(delimiter);
}

/**@description: Rounds the Number to the necessary precision
 * @param: {num} Number
 * @param: {decimal} Number of decimals (100 - (2 decimals), 1000 (3 decimals) etc..
 * @return: Number rounded with necessary precision
 * */
export function numFormat(num, decimal) {
	return Math.round(num * decimal)/decimal;
}