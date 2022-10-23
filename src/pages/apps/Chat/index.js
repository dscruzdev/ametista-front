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

// ChatApp
const ChatApp = (): React$Element<React$FragmentType> => {
    const [selectedUser, setSelectedUser] = useState(users[1]);

    /**
     * On user change
     */
    const onUserChange = (user) => {
        setSelectedUser(user);
    };

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
                    <ChatUsers onUserSelect={onUserChange} />
                </Col>

                <Col xxl={5} xl={{ span: 12, order: 2 }}>
                    <ChatArea selectedUser={selectedUser} />
                </Col>

                <Col xxl={{ span: 3, order: 2 }} xl={{ span: 6, order: 1 }}>
                    <ChatProfile selectedUser={selectedUser} />
                </Col>
            </Row>
        </>
    );
};

export default ChatApp;
