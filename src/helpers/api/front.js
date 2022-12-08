// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getchat(params: any): any {
    const baseUrl = '/front/chat';
    return api.get(`${baseUrl}`, params);
}



export { getchat };
