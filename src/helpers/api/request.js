// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getrequests(params: any): any {
    const baseUrl = '/request';
    return api.get(`${baseUrl}`, params);
}



export { getrequests };
