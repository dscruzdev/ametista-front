// @flow
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';
import ChatProfile from './ChatProfile';
import { frontticket, getmessages } from '../../../helpers/api'
import io from 'socket.io-client';


// dummy data
import { users } from './data';
// ChatApp
const ChatTicket = (): React$Element<React$FragmentType> => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    console.log(id)
    const [loaded, setLoaded] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const AUTH_SESSION_KEY = 'hyper_user';
    const userSession = JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY));
    frontticket({ id: id }).then(data => {
        if (!loaded) {
            setSelectedUser(data);
            setLoaded(true);
            getmessages({ "idRequests": id, "uid": userSession.id }).then( data2 =>{
                setMessages(data2);
            })
        }
    })
    const [messages, setMessages] = useState([]);
    const [check, setCheck] = useState(false);
    /* olderMessages = getmessages({ "idRequests": idRequest.idRequests, "uid": userSession.id }).then;
    onMessagesLoad(olderMessages); */
    /**
     * On user change
     */
    const onUserChange = (user) => {
        setSelectedUser(user);
        setCheck(false);
    };

    const trueCheck = () => {
        setCheck(true);
    }

    const onMessagesLoad = (inmessages) => {
        setMessages(inmessages);
    }

    return (
        <>
            <Row>
                <Col>
                    <div className="mb-3">
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xxl={9} xl={{ span: 12, order: 2 }}>
                    <ChatArea selectedUser={selectedUser} olderMessages={messages} trueCheck={trueCheck} check={check} />
                </Col>

                <Col xxl={{ span: 3, order: 2 }} xl={{ span: 6, order: 1 }}>
                    <ChatProfile selectedUser={selectedUser} loaded={loaded} />
                </Col>
            </Row>
        </>
    );
};

export default ChatTicket;
