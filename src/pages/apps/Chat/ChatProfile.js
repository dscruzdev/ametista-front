// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Button, Row, Col } from 'react-bootstrap';
import { endrequests } from '../../../helpers/api'

import ModalsComments from '../../uikit/ModalsComments';
import ModalsFinalizarChamado from '../../uikit/ModalsFinalizarChamado';
import ModalsWriteComments from '../../uikit/ModalsWriteComments';
import ModalsTicketEdit from '../../uikit/ModalsTicketEdit';

import io from 'socket.io-client';
const socket = io.connect("http://localhost:8080");
type ChatProfileProps = {
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
        status: string,
        description: String,
    },
};

// ChatProfile
const ChatProfile = ({ selectedUser, socket }: ChatProfileProps): React$Element<React$FragmentType> => {
    const user = selectedUser || {};
    const subject = user.subject ? user.subject.split(',') : [];
    var languages = "", subjects = "", requestid = "", description = "", status;
    user.requests.map((request, index) => {
        status += request.status
        languages += request.language + ", ";
        subjects = subjects + "," + request.subject;
        requestid += request.idRequests + ", ";
        description += request.description + ", "
    });
    const statusarray = status ? status.split(',') : [];
    languages = languages.slice(0, languages.length - 2);
    requestid = requestid.slice(0, requestid.length - 2);
    description = description.slice(0, description.length - 2);
    console.log(statusarray);
    const endRequest = async (idRequests, cpfClients) => {
        
        console.log(user.cpfClients);
        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);
        console.log(date);

        //endrequests({ idRequests: idResquests, cpfClients: cpfClients, endedAt: date})
    }

    const subjectsArray = subjects ? subjects.split(",") : [];
    return (
        <>
            {user && (
                <Card>
                    <Card.Body>
                        {/*<Dropdown className="float-end" align="end">
                            <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>View Full</Dropdown.Item>
                                <Dropdown.Item>Edit Contact Info</Dropdown.Item>
                                <Dropdown.Item>Remove</Dropdown.Item>
                            </Dropdown.Menu>
            </Dropdown>*/}

                        <div className="mt-3 text-center">
                            <img src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" className="img-thumbnail avatar-lg rounded-circle" />
                            <h4>{user.name}</h4>
                            <ModalsFinalizarChamado selectedUser={selectedUser}/>
                            <Link to={"../../apps/tickets?id="+user.requests[0].idRequests}>
                            <Button className="btn-sm mt-1 me-2" variant="primary">
                                <i className=" uil-arrow-right me-1"></i>Histórico de chamados
                            </Button>
                            </Link>
                        </div>

                        <div className="mt-3">
                            <hr className="" />
                            <Row>
                                <Col md={8}>
                                    <p className="mt-2 mb-1">
                                        <strong>
                                            <i className="uil uil-at"></i> E-mail:
                                        </strong>
                                    </p>
                                    <p className="mb-0">{user.email}</p>
                                </Col>
                                <ModalsTicketEdit selectedUser={selectedUser}/>
                            </Row>


                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-phone"></i> Telefone:
                                </strong>
                            </p>
                            <p>{user.phone}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="mdi mdi-badge-account-horizontal-outline"></i> CPF:
                                </strong>
                            </p>
                            <p>{user.cpfClients}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-globe"></i> Idioma:
                                </strong>
                            </p>
                            <p>{languages}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="mdi mdi-identifier"></i> Número do chamado:
                                </strong>
                            </p>
                            <p>{requestid}</p>

                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className=" uil-comment-message"></i> Assunto:
                                </strong>
                            </p>

                            <p>
                                {subjectsArray.map((subject, index) => {
                                    return (
                                        <span key={index} className="badge badge bg-primary bg-primary p-1 font-14 me-1">
                                            {subject}
                                        </span>
                                    );
                                })}
                            </p>

                            <p className="mb-2 mt-2">
                                <strong>
                                    <i className="uil-align-left"></i> Descrição:
                                </strong>
                            </p>

                            <p>{description}</p>

                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className="uil uil-tag-alt"></i> Status:
                                </strong>
                            </p>

                            <p>
                                {statusarray.map((status, index) => {
                                    if (status == "Em aberto") {
                                        return (
                                            <span key={index} className="badge badge-warning-lighten p-1 font-14 me-1">
                                                {status}
                                            </span>);
                                    }

                                    if (status == "Em andamento") {
                                        return (
                                            <span key={index} className="badge badge-info-lighten p-1 font-14 me-1">
                                                {user.requests[0].status}
                                            </span>);
                                    } else {
                                        return (
                                            <span key={index} className="badge badge-success-lighten p-1 font-14 me-1">
                                                {user.requests[0].status}
                                            </span>);
                                    }
                                })}

                            </p>


                            <ModalsWriteComments requestid={requestid}/>

                           <ModalsComments comments={user.requests[0].comments}/>

                        </div>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};

export default ChatProfile;
