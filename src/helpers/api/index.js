// @flow
import { login, logout, signup, forgotPassword, forgotPasswordConfirm } from './auth';
import { getrequests, endrequests, setscore, updateinfos, frontticket, clientrequests, frontrequests, createstatus } from './request';
import { getclients } from './client';
import { getareas, createarea, deletearea, updatearea } from './area';
import { createuser, deleteuser, updateuser } from './user';
import { getlanguages, createlanguage, deletelanguage, updatelanguage } from './language';
import { getsubjects, createsubject, deletesubject, updatesubject } from './subject';
import { getcomments,createcomment } from './comment';
import { sendmessage, getmessages } from './conversation';

export {
    login,
    logout,
    signup,
    forgotPassword,
    forgotPasswordConfirm,
    frontticket,
    getclients,
    getcomments,
    getlanguages,
    setscore,
    getrequests,
    createstatus,
    getsubjects,
    endrequests,
    getareas,
    createarea,
    createsubject,
    createlanguage,
    createuser,
    deleteuser,
    updateinfos,
    updateuser,
    deletearea,
    deletelanguage,
    deletesubject,
    updatearea,
    updatelanguage,
    updatesubject,
    sendmessage,
    createcomment,
    getmessages,
    clientrequests,
    frontrequests
};
