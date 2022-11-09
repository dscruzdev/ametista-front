// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getsubjects(params: any): any {
    const baseUrl = '/subject';
    return api.get(`${baseUrl}`, params);
}



export { getsubjects };
