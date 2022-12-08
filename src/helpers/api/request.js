// @flow
import { APICore } from './apiCore';

const api = new APICore();

// account
function getrequests(params: any): any {
    const baseUrl = '/request';
    return api.get(`${baseUrl}`, params);
}
function frontrequests(params: any): any {
    const baseUrl = '/front/requests';
    return api.get(`${baseUrl}`, params);
}

function endrequests(params: any): any {
    const baseUrl = '/front/request/endrequest';
    return api.update(`${baseUrl}`, params);
}

function clientrequests(params: any): any {
    const baseUrl = '/front/clientrequests';
    return api.get(`${baseUrl}`, params);
}

function setscore(params: any): any {
    const baseUrl = '/request/setscore';
    return api.update(`${baseUrl}`, params);
}

function updateinfos(params: any): any {
    const baseUrl = '/front/chat';
    return api.update(`${baseUrl}`, params);
}

function createstatus(params: any): any {
    const baseUrl = '/relation';
    return api.create(`${baseUrl}`, params);
}

function frontticket(params: any): any {
    const baseUrl = '/front/chat/'+params.id;
    return api.get(`${baseUrl}`, params);
}


export { getrequests, endrequests, setscore, updateinfos, frontticket, clientrequests, frontrequests, createstatus };
