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

function deletearea(params: any): any {
    const baseUrl = '/area/'+params.idAreas;
    return api.delete(`${baseUrl}`, params);
}

function updatearea(params: any): any {
    const baseUrl = '/area/'+params.idAreas;
    return api.update(`${baseUrl}`, params);
}



export { getareas, createarea, deletearea, updatearea };
