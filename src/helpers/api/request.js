// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getrequests(params: any): any {
    const baseUrl = '/request';
    return api.get(`${baseUrl}`, params);
}

function endrequests(params: any): any {
    const baseUrl = '/request';
    return api.update(`${baseUrl}`, params);
}



export { getrequests, endrequests };
