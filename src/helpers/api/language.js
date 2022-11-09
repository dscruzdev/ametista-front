// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getlanguages(params: any): any {
    const baseUrl = '/language';
    return api.get(`${baseUrl}`, params);
}



export { getlanguages };
