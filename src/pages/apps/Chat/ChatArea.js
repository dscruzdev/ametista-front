// @flow
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendmessage } from '../../../helpers/api/';

// components
import { FormInput } from '../../../components';
import Loader from '../../../components/Loader';
import ModalsUploadFile from '../../uikit/ModalsUploadFile';

// default data
import { messages, messagesConversation } from './data';

const UserMessage = ({ message, toUser }) => {
    return (
        <li className={classnames('clearfix', { odd: message.from.id === toUser.id })}>
            <div className="chat-avatar">
                <img src={message.from.avatar} className="rounded" alt="" />
                <i>{message.sendOn}</i>
            </div>

            <div className="conversation-text">
                <div className="ctext-wrap">
                    <i>{message.from.name}</i>
                    {message.message.type === 'text' && <p>{message.message.value}</p>}
                </div>
                {message.message.type === 'file' && (
                    <Card className="mt-2 mb-1 shadow-none border text-start">
                        <div className="p-2">
                            <Row className="align-items-center">
                                <Col className="col-auto">
                                    <div className="avatar-sm">
                                        <span className="avatar-title rounded">
                                            <i className="uil uil-file-upload-alt font-20"></i>
                                        </span>
                                    </div>
                                </Col>
                                <Col className="ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        {message.message.value.file}
                                    </Link>
                                    <p className="mb-0">{message.message.value.size}</p>
                                </Col>
                                <Col className="col-auto">
                                    <Link to="#" className="btn btn-link btn-lg text-muted">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                )}
            </div>

            {/*<Dropdown className="conversation-actions" align="end">
                <Dropdown.Toggle variant="link" className="btn btn-sm btn-link arrow-none shadow-none">
                    <i className="uil uil-ellipsis-v"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Copy Messaget</Dropdown.Item>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>*/}
        </li>
    );
};

type ChatAreaProps = {
    selectedUser: {
        id: number,
        name: string,
        avatar: string,
        lastMessage: string,
        totalUnread?: number,
        lastMessageOn: string,
        email: string,
        phone: string,
        location: string,
        languages: string,
        subject: string,
    },
};

// ChatArea
const ChatArea = ({ selectedUser, socket, olderMessages, trueCheck, check }: ChatAreaProps): React$Element<React$FragmentType> => {
    const [loading, setLoading] = useState(false);
    const [userMessages, setUserMessages] = useState([]);
    const [messageId, setMessageId] = useState(1);
    const [unreaded, setUnreaded] = useState(0);
    const [loadedData, setLoadedData] = useState(false);
    const [toUser] = useState({
        id: 9,
        name: 'Shreyu N',
        avatar: 'assets/images/users/avatar-7.jpg',
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'California, USA',
        languages: 'English, German, Spanish',
        subject: 'Financeiro',
    });

    const oldmessages = olderMessages.data;

    /*
     *  Fetches the messages for selected user
     */


    const getMessagesForUser = useCallback(() => {
        if (selectedUser) {
            setLoading(true);
            setTimeout(() => {
                setUserMessages([
                    ...messages.filter(
                        (m) =>
                            (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
                            (toUser.id === m.from.id && m.to.id === selectedUser.id)
                    ),
                ]);
                setLoading(false);
            }, 750);
        }
    }, [selectedUser, toUser]);

    useEffect(() => {
        getMessagesForUser();
    }, [getMessagesForUser]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            
            toUser.lastMessage = data;
            toUser.totalUnread = unreaded + 1;
            let newUserMessages = [...userMessages];
            newUserMessages.push({
                id: messageId,
                from: selectedUser,
                to: toUser,
                message: { type: 'text', value: data },
                sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
            });
            setUserMessages(newUserMessages);
            setMessageId(messageId + 1);
            setUnreaded(unreaded + 1);
        })
    }, [messageId, selectedUser, socket, toUser, userMessages, unreaded, oldmessages]);

    if (olderMessages.length !== 0 && !loadedData) {
        oldmessages.forEach((message, key) => {
            message.id = key + 1;
        });
        setLoadedData(true);
        trueCheck();
        setUserMessages(oldmessages);
    }

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * sends the chat message
     */

    const sendChatMessage = async (e, values) => {
        let newUserMessages = [...userMessages];
        newUserMessages.push({
            id: oldmessages.length+messageId,
            from: toUser,
            to: selectedUser,
            message: { type: 'text', value: values.target[0].value },
            sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        });
        setUserMessages(newUserMessages);
        setMessageId(messageId + 1);
        sendmessage({ idRequests: selectedUser.requests[selectedUser.requests.length - 1].idRequests, body: values.target[0].value });
        console.log(newUserMessages);
        reset();
    };

    return (
        <>
            <Card>
                <Card.Body className="position-relative px-0 pb-0">
                    {loading && <Loader />}

                    <SimpleBar style={{ height: '538px', width: '100%' }}>
                        <ul className="conversation-list px-3">
                            {userMessages.map((message, index) => {
                                return <UserMessage key={index} message={message} toUser={toUser} />;
                            })}
                        </ul>
                    </SimpleBar>

                    <Row className="px-3 pb-3">
                        <Col>
                            <div className="mt-2 bg-light p-3 rounded">
                                <form
                                    noValidate
                                    name="chat-form"
                                    id="chat-form"
                                    onSubmit={handleSubmit(sendChatMessage)}>
                                    <div className="row">
                                        <div className="col mb-2 mb-sm-0">
                                            <FormInput
                                                type="text"
                                                name="newMessage"
                                                className="border-0"
                                                placeholder="Enter your text"
                                                register={register}
                                                key="newMessage"
                                                errors={errors}
                                                control={control}
                                            />
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="btn-group">
                                                <ModalsUploadFile />
                                                <Link to="#" className="btn btn-light">
                                                    {' '}
                                                    <i className="uil uil-smile"></i>{' '}
                                                </Link>
                                                <button type="submit" className="btn btn-success chat-send btn-block">
                                                    <i className="uil uil-message"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default ChatArea;
