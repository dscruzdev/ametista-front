// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';

type ModalsProps = {
    User: {
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



const ModalWithColoredHeader = ({ selectedUser }: ModalsProps): React$Element<React$FragmentType> => {
    const user = selectedUser || {};
    const subject = user.subject ? user.subject.split(',') : [];
    var languages = "", subjects = "", requestid = "", description = "", status;
    user.requests.map((request, index) => {
        status += request.status
        subjects = subjects + "," + request.subject;
        requestid += request.idRequests + ", ";
    });
    const statusarray = status ? status.split(',') : [];
    languages = languages.slice(0, languages.length - 2);
    requestid = requestid.slice(0, requestid.length - 2);
    description = description.slice(0, description.length - 2);
    const endRequest = async (idRequests, cpfClients) => {
        console.log(idRequests);
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

    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

    /**
     * Opens modal with custom header
     */
    const openModalWithHeaderClass = (className) => {
        setHeaderClassName(className);
        toggle();
    };

    return (
        <>

            <Button className="btn-sm mt-1 me-2" variant="primary-light" onClick={() => openModalWithHeaderClass('primary-light')}>
                <i className=" uil-check me-1"></i>Finalizar chamado
            </Button>
            {user && (
                <Modal show={modal} onHide={toggle}>
                    <Modal.Header
                        onHide={toggle}
                        closeButton
                        className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                        <h4 className="modal-title text-light">Chamados em aberto</h4>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group>
                            <div className="mt-2 mb-2">
                                {user.requests.map((request, index) => {
                                   return( <Form.Check className="" type="checkbox" id="" label={request.subject} />)
                                })}
                            </div>
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={headerClassName} onClick={() => { endRequest(requestid, user.cpfClients) }}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>

    );
};


const ModalsFinalizarChamado = ({ selectedUser }: ModalsProps): React$Element<React$FragmentType> => {
    return (
        <>
            {/*<PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/modals' },
                    { label: 'Modals', path: '/ui/modals', active: true },
                ]}
                title={'Modals'}
            />

            <Row>
                {/*<Col md={6}>
                    <ModalSizes />
        </Col>

                
                    <ModalsWithPages />
            </Row>

            <Row>
                <Col md={6}>
                    <ModalWithAlerts />
                </Col>

                <Col md={6}>
                    <ModalPositions />
                </Col>
            </Row>*/}


            <ModalWithColoredHeader selectedUser={selectedUser} />


            {/*<Row>
                <Col md={6}>
                    <MultipleModal />
                </Col>

                <Col md={6}>
                    <ToggleBetweenModals />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <StaticBackdropModal />
                </Col>
            </Row>*/}
        </>
    );
};

export default ModalsFinalizarChamado;
