// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function createuser(params: any): any {
    const baseUrl = '/user';
    return api.create(`${baseUrl}`, params);
}

function deleteuser(params: any): any {
    const baseUrl = '/user/'+params.cpfUsers;
    return api.delete(`${baseUrl}`, params);
}

function updateuser(params: any): any {
    const baseUrl = '/user/'+params.cpfUsers;
    return api.update(`${baseUrl}`, params);
}


export { createuser, deleteuser, updateuser };