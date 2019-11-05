import axios  from 'axios';

/**@description it promises to get JSON or BLOB response;
 * optional argument 'file' if it is, gives the extension of the file
 * to be requested as blob src;
 * @param {string} source (url and the file name without extension);
 * @param {string} file extension ('pdf' or 'png' etc... as blob) optional;
 * @return Promise with the response data in JSON or blob (file), or error
 * */
export function getAxios(source, file='') {
    let extension = file.length ? `.${file}` : '.json';
    let responseType = file.length ? 'blob' : 'json';

    let params = {
        url: `${source}${extension}`,
        method: 'GET',
    };

    return axios(params)
        .then(resp => {
            return (file.length)
                ? window.URL.createObjectURL(new Blob([resp.data])) //src ref
                : resp.data;
        })
        .catch(error => console.log(error));
}

/**@description it receives the data and update it with the creation Date
 * and sets the localStorage;
 * @param {string} name - localStorage name;
 * @param {object} data - fetched data;
 * */
export function setLocalStorage( name, data ) {
    let dataWithDate = {};
    if (Object.keys(data).length) {
        dataWithDate = {
            ...data,
            creationDate: new Date()
        };
        localStorage.setItem(name, JSON.stringify(dataWithDate));
    }
}