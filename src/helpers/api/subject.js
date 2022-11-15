// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getsubjects(params: any): any {
    const baseUrl = '/subject';
    return api.get(`${baseUrl}`, params);
}

function createsubject(params: any): any {
    const baseUrl = '/subject';
    return api.create(`${baseUrl}`, params);
}

function deletesubject(params: any): any {
    const baseUrl = '/subject';
    return api.delete(`${baseUrl}`, params);
}

function updatesubject(params: any): any {
    const baseUrl = '/subject';
    return api.update(`${baseUrl}`, params);
}



export { getsubjects, createsubject, deletesubject, updatesubject };
