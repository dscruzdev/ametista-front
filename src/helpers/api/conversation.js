// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function sendmessage(params: any): any {
    const baseUrl = '/conversation/send';
    return api.create(`${baseUrl}`, params);
}



export { sendmessage };
