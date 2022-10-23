// @flow
import React from 'react';
import { Card, Dropdown, Button, Row, Col } from 'react-bootstrap';
import ModalsComments from '../../uikit/ModalsComments';
import ModalsWriteComments from '../../uikit/ModalsWriteComments';
import ModalsTicketEdit from '../../uikit/ModalsTicketEdit';

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
const ChatProfile = ({ selectedUser }: ChatProfileProps): React$Element<React$FragmentType> => {
    const user = selectedUser || {};
    const status = user.status ? user.status.split(',') : [];
    const subject = user.subject ? user.subject.split(',') : [];

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
                            <img src={user.avatar} alt="" className="img-thumbnail avatar-lg rounded-circle" />
                            <h4>{user.name}</h4>
                            <Button className="btn-sm mt-1 me-2" variant="primary-light">
                                <i className=" uil-check me-1"></i>Finalizar chamado
                            </Button>
                            <Button className="btn-sm mt-1 me-2" variant="primary">
                                <i className=" uil-arrow-right me-1"></i>Histórico de chamados
                            </Button>
                            <p className="text-muted mt-2 font-14">
                                Última interação: <strong>{user.lastMessageOn}</strong>
                            </p>
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
                            <ModalsTicketEdit />
                            </Row>
                            

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-phone"></i> Telefone:
                                </strong>
                            </p>
                            <p>{user.phone}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-globe"></i> Idioma:
                                </strong>
                            </p>
                            <p>{user.languages}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="mdi mdi-identifier"></i> Número do chamado:
                                </strong>
                            </p>
                            <p>{user.phone}</p>

                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className=" uil-comment-message"></i> Assuntos:
                                </strong>
                            </p>

                            <p>
                                {subject.map((subject, index) => {
                                    return (
                                        <span key={index} className="badge badge-warning-lighten p-1 font-14 me-1">
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
                           
                            <p>{user.description}</p>
                        
                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className="uil uil-tag-alt"></i> Status:
                                </strong>
                            </p>

                            <p>
                                {status.map((status, index) => {
                                    if (status=="Em espera"){
                                        return (
                                            <span key={index} className="badge badge-warning-lighten p-1 font-14 me-1">
                                                {status}
                                            </span>);
                                        }
                                        
                                        if (status=="Em andamento"){
                                            return (
                                                <span key={index} className="badge badge-info-lighten p-1 font-14 me-1">
                                                    {status}
                                                </span>);
                                    }
                                })}
                            
                            </p>

                            
                           <ModalsWriteComments />
                           <ModalsComments />
                            
                        </div>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};

export default ChatProfile;
