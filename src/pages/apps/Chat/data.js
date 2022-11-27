// images
import { getsubjects, getlanguages, getcomments, getrequests, getclients } from "../../../helpers/api";
import { APICore } from "../../../helpers/api/apiCore";
import axios from "axios";

import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../assets/images/users/avatar-8.jpg';
import avatar9 from '../../../assets/images/users/avatar-9.jpg';

// var dataclients;

const clients = () =>
    fetch("http://localhost:8080/front/chat")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());

const users = [
    {
        id: 0,
        name: 'Wait',
        avatar: avatar2,
        lastMessage: 'Tait..',
        totalUnread: 3,
        lastMessageOn: 'wait...',
        email: 'wait...',
        phone: 'wait...',
        subject: 'Financeiro',
        location: 'California, USA',
        languages: 'English, German, Spanish',
        status: 'Em espera',
        description: 'hsJADHlidhILDJdj',
        requests:[
            {
                idRequests: 0,
                category: "...",
                endedAt: "...",
                description: "...",
                deadline: "...",
                priority: 1,
                status: "...",
                idLanguage: "...",
                idSubject: "...",
                idChannels: "...",
                CSAT: 5,
                CES: 5,
                NPS: 5,
                createdAt: "2022-11-09T01:30:00.000Z",
                updatedAt: "2022-11-09T01:30:00.000Z",
                comments: []
            }
        ],
    },
    
    {
        id: 1,
        name: 'Brandon Smith',
        avatar: avatar2,
        lastMessage: 'How are you today?',
        totalUnread: 3,
        lastMessageOn: '4:30am',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        subject: 'Financeiro',
        location: 'California, USA',
        languages: 'English, German, Spanish',
        status: 'Em espera',
        description: 'hsJADHlidhILDJdj',
    },
    {
        id: 2,
        name: 'Maria C',
        avatar: avatar5,
        lastMessage: "Hey! a reminder for tomorrow's meeting?",
        lastMessageOn: '5:30am',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        subject: 'Financeiro',
        location: 'New York, USA',
        languages: 'English, German, Spanish',
        status: 'Em andamento',
        description: 'hsJADHlidhILDJdj',
    },
    {
        id: 3,
        name: 'Dominic A',
        avatar: avatar4,
        lastMessage: "Are we going to have this week's planning meeting?",
        totalUnread: 2,
        lastMessageOn: 'Thu',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'New Jersey, USA',
        languages: 'English, German, Spanish',
        status: 'Em espera',
    },
    {
        id: 4,
        name: 'Ronda D',
        avatar: avatar9,
        lastMessage: 'Please check these design assets..',
        lastMessageOn: 'Wed',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'California, USA',
        languages: 'English, German, Spanish',
        status: 'Em andamento',
    },
    {
        id: 5,
        name: 'Michael H',
        avatar: avatar6,
        lastMessage: 'Are you free for 15 mins? I would like to discuss something',
        totalUnread: 6,
        lastMessageOn: 'Tue',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'New York, USA',
        languages: 'English, German, Spanish',
        status: 'Em andamento',
    },
    {
        id: 6,
        name: 'Thomas R',
        avatar: avatar7,
        lastMessage: "Let's have meeting today between me, you and Tony...",
        lastMessageOn: 'Tue',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'New Jersey, USA',
        languages: 'English, German, Spanish',
        status: 'Em andamento',
    },
    {
        id: 7,
        name: 'Thomas J',
        avatar: avatar8,
        lastMessage: 'Howdy?',
        lastMessageOn: 'Tue',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'New York, USA',
        languages: 'English, German, Spanish',
        status: 'Em espera',
    },
    {
        id: 8,
        name: 'Rikcy J',
        avatar: avatar3,
        lastMessage: 'Are you interested in learning?',
        totalUnread: 28,
        lastMessageOn: 'Mon',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'New Jersey, USA',
        languages: 'English, German, Spanish',
        status: 'Em andamento',
    },
];
const messagesConversation = (id) =>
    fetch("/conversation/messages/"+id)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());

const messages = [];

const defaultTo = {
    id: 9,
    name: 'Shreyu N',
    avatar: avatar1,
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'California, USA',
    languages: 'English, German, Spanish',
    status: 'Em andamento',
};

for (const user of users) {
    messages.push(
        {
            id: 1,
            message: {
                type: 'text',
                value: 'Hello!',
            },
            to: defaultTo,
            from: user,
            sendOn: '10:00',
        },
        {
            id: 2,
            message: {
                type: 'text',
                value: 'Hi, How are you? What about our next meeting?',
            },
            to: user,
            from: defaultTo,
            sendOn: '10:01',
        },
        {
            id: 3,
            message: {
                type: 'text',
                value: 'Yeah everything is fine',
            },
            to: defaultTo,
            from: user,
            sendOn: '10:01',
        },
        {
            id: 4,
            message: {
                type: 'text',
                value: 'Awesome!',
            },
            to: user,
            from: defaultTo,
            sendOn: '10:02',
        },
        {
            id: 5,
            message: {
                type: 'text',
                value: "Let's have it today if you are free",
            },
            to: defaultTo,
            from: user,
            sendOn: '10:03',
        },
        {
            id: 6,
            message: {
                type: 'text',
                value: 'Sure thing! let me know if 2pm works for you',
            },
            to: user,
            from: defaultTo,
            sendOn: '10:03',
        },
        {
            id: 7,
            message: {
                type: 'text',
                value: 'Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?',
            },
            to: defaultTo,
            from: user,
            sendOn: '10:04',
        },
        {
            id: 8,
            message: {
                type: 'text',
                value: 'We can also discuss about the presentation talk format if you have some extra mins',
            },
            to: defaultTo,
            from: user,
            sendOn: '10:04',
        },
        {
            id: 9,
            message: {
                type: 'text',
                // tslint:disable-next-line: max-line-length
                value: "3pm it is. Sure, let's discuss about presentation format, it would be great to finalize today. I am attaching the last year format and assets here..",
            },
            to: user,
            from: defaultTo,
            sendOn: '10:05',
        },
        {
            id: 10,
            message: {
                type: 'file',
                value: {
                    file: 'Hyper-admin.zip',
                    size: '2.3MB',
                },
            },
            to: user,
            from: defaultTo,
            sendOn: '10:05',
        }
    );
}

export { users, messages, clients, messagesConversation };
