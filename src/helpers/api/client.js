// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getclients(params: any): any {
    const baseUrl = '/client';
    return api.get(`${baseUrl}`, params);
}



export { getclients };
