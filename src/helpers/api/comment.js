// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getcomments(params: any): any {
    const baseUrl = '/comment';
    return api.get(`${baseUrl}`, params);
}

function createcomment(params: any): any {
    const baseUrl = '/comment';
    return api.create(`${baseUrl}`, params);
}



export { getcomments, createcomment };
