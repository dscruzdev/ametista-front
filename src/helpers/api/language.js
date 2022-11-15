// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getlanguages(params: any): any {
    const baseUrl = '/language';
    return api.get(`${baseUrl}`, params);
}

function createlanguage(params: any): any {
    const baseUrl = '/language';
    return api.create(`${baseUrl}`, params);
}



export { getlanguages, createlanguage };
