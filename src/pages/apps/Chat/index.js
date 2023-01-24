// @flow
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
//import PageTitle from '../../../components/PageTitle';

import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';
import ChatProfile from './ChatProfile';
// dummy data
import { users } from './data';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:8080");
// ChatApp
const ChatApp = (): React$Element<React$FragmentType> => {
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [messages, setMessages] = useState([]);
    const [check, setCheck] = useState(false);
    /**
     * On user change
     */
    const onUserChange = (user) => {
        setCheck(false);
        setSelectedUser(user);
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
                <Col xxl={4} xl={{ span: 6, order: 1 }}>
                    <ChatUsers onUserSelect={onUserChange} socket={socket} onMessagesLoad={onMessagesLoad}/>
                </Col>

                <Col xxl={5} xl={{ span: 12, order: 2 }}>
                    <ChatArea selectedUser={selectedUser} socket={socket} olderMessages={messages} trueCheck={trueCheck} check={check}/>
                </Col>

                <Col xxl={{ span: 3, order: 2 }} xl={{ span: 6, order: 1 }}>
                    <ChatProfile selectedUser={selectedUser} socket={socket} />
                </Col>
            </Row>
        </>
    );
};

export default ChatApp;
