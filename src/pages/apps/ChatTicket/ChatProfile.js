// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Button, Row, Col } from 'react-bootstrap';
import ModalsCommentsChatTicket from '../../uikit/ModalsCommentsChatTicket';
import ModalsTicketEdit from '../../uikit/ModalsTicketEdit';
import { createstatus} from '../../../helpers'


// ChatProfile
const ChatProfile = ({ selectedUser, loaded }): React$Element<React$FragmentType> => {
    var idRequests = loaded?selectedUser.data[0].requests[0].idRequests:0;

    const reopenRequest = async () => {
        createstatus({ idRequests: idRequests, idLogStatusRequests: 1 });
        window.location.reload(true);
    }

    const statusbagde=((status) => {
        if (status == "Em aberto") {
            return (
                <span className="badge badge-warning-lighten p-1 font-14 me-1">
                    {status}
                </span>);
        }

        if (status == "Em andamento") {
            return (
                <span className="badge badge-info-lighten p-1 font-14 me-1">
                    {status}
                </span>);
        } else {
            return (
                <span className="badge badge-success-lighten p-1 font-14 me-1">
                    {status}
                </span>);
        }
    })
    return (
        <>
             
                <Card>
                    <Card.Body>

                        <div className="mt-3 text-center">
                        <img src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" className="img-thumbnail avatar-lg rounded-circle" />
                            <h4>{loaded?selectedUser.data[0].name:"Aguardando"}</h4>
                            <Button className="btn-sm mt-1 me-2" variant="primary-light" onClick={() => { reopenRequest() }}>
                                <i className="mdi mdi-open-in-app me-1"></i>Reabrir chamado
                            </Button>
                            <Link to={"../../apps/tickets?id="+idRequests}>
                            <Button className="btn-sm mt-1 me-2" color="primary">
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
                            <p className="mb-0">{loaded?selectedUser.data[0].email:"Aguardando"}</p>
                            </Col>

                            </Row>
                            

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-phone"></i> Telefone:
                                </strong>
                            </p>
                            <p>{loaded?selectedUser.data[0].phone:"Aguardando"}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="mdi mdi-badge-account-horizontal-outline"></i> CPF:
                                </strong>
                            </p>
                            <p>{loaded?selectedUser.data[0].cpfClients:"Aguardando"}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="uil uil-globe"></i> Idioma:
                                </strong>
                            </p>
                            <p>{loaded?selectedUser.data[0].requests[0].language:"Aguardando"}</p>

                            <p className="mt-3 mb-1">
                                <strong>
                                    <i className="mdi mdi-identifier"></i> Número do chamado:
                                </strong>
                            </p>
                            <p>{loaded?selectedUser.data[0].requests[0].idRequests:"Aguardando"}</p>

                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className=" uil-comment-message"></i> Assuntos:
                                </strong>
                            </p>

                            <p>
                                        <span className="badge badge bg-primary bg-primary p-1 font-14 me-1">
                                            {loaded?selectedUser.data[0].requests[0].subject:"Aguardando"}
                                        </span>
                            </p>
                           
                            <p className="mb-2 mt-2">
                                <strong>
                                    <i className="uil-align-left"></i> Descrição:
                                </strong> 
                            </p>
                            
                            <p>{loaded?selectedUser.data[0].requests[0].description:"Aguardando"}</p>

                            <p className="mt-3 mb-2">
                                <strong>
                                    <i className="uil uil-tag-alt"></i> Status:
                                </strong>
                            </p>
                            <p>
                                {statusbagde(loaded?selectedUser.data[0].requests[0].status:0)}
                                 
                            </p>

                            
                            <ModalsCommentsChatTicket comments={loaded?selectedUser.data[0].requests[0].comments:["Aguardando"]}/>
                            
                        </div>
                    </Card.Body>
                </Card>
            
        </>
    );
};


export default ChatProfile;
