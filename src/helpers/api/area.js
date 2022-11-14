// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getareas(params: any): any {
    const baseUrl = '/area';
    return api.get(`${baseUrl}`, params);
}

function createarea(params: any): any {
    const baseUrl = '/area';
    return api.create(`${baseUrl}`, params);
}



export { getareas, createarea };
