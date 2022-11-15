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

function deletelanguage(params: any): any {
    const baseUrl = '/language/'+params.idLanguages;
    return api.delete(`${baseUrl}`, params);
}

function updatelanguage(params: any): any {
    const baseUrl = '/language/'+params.idLanguages;
    return api.update(`${baseUrl}`, params);
}



export { getlanguages, createlanguage, deletelanguage, updatelanguage };
