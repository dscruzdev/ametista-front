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
<<<<<<< HEAD

=======
>>>>>>> 258cec939bd6b3214646831566fceb3c5111f712


export { sendmessage, getmessages };
