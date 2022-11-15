// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function createuser(params: any): any {
    const baseUrl = '/user';
    return api.create(`${baseUrl}`, params);
}

export { createuser };
