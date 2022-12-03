// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function sendmessage(params: any): any {
    const baseUrl = '/conversation/send';
    return api.create(`${baseUrl}`, params);
}

function getmessages(params: any): any {
    const baseUrl = '/front/chat/messages/'+params.idRequests;
    return api.get(`${baseUrl}`, params);
}



export { sendmessage, getmessages };
