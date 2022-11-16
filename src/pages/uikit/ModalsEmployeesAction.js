// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import StatisticsEmployees from '../apps/Registers/StatisticsEmployees';
import StatusEmployees from '../apps/Registers/StatusEmployees';
import { deleteuser } from '../../helpers/'

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalsWithPagesArea = (data) => {

    const [AttendantEditModal, setAttendantEditModal] = useState(false);

    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */



    const toggleAttendantEdit = () => {
        setAttendantEditModal(!AttendantEditModal);
    };
    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/

    return (
        <div>
                <ModalDetails />
                
                <Button variant="primary" className="me-2 mb-1" onClick={toggleAttendantEdit}>
                    <i className="mdi mdi-square-edit-outline"></i>
                </Button>


                <ModalPositions data={data} />
                
              

                {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

                {/* Sign up Modal */}
                <Modal show={AttendantEditModal} onHide={toggleAttendantEdit}>
                    <Modal.Header onHide={toggleAttendantEdit}
                            closeButton className='modal-colored-header bg-primary'>
                            <h4 className="modal-title">Cadastro de funcionário</h4>
                        </Modal.Header>
                    <Modal.Body>
                        <form className="ps-3 pe-3 mt-2" action="#">
                            <div className="mb-3">
                            <FormInput
                                    label="Nome"
                                    type="text"
                                    name="name"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="text"
                                    //errors={errors}
                                    //{control}
                                />
                            

                            <div className="mb-3">
                            <FormInput
                                    label="CPF"
                                    type="text"
                                    name="cpf"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="text"
                                    //errors={errors}
                                    //{control}
                                />
                            </div>

                            <div className="mb-3">
                            <FormInput
                                    label="E-mail"
                                    type="text"
                                    name="email"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="text"
                                    //errors={errors}
                                    //{control}
                                />
                            </div>

                            <div className="mb-3">
                                <FormInput
                                    label="Senha"
                                    type="password"
                                    name="password"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="password"
                                />
                            </div>

                            <div className="mb-3">
                            <p className="mb-1 mt-3 fw-bold">Área</p>
                            <Select
                                className="react-select"
                                classNamePrefix="react-select"
                                options={[
                                    { value: 'administrativo', label: 'Administrativa' },
                                    { value: 'marketing', label: 'Marketing' },
                                    { value: 'comercial', label: 'Comercial' },
                                ]}>
                            </Select>
                            </div>

                            <div className="mb-3">
                            <p className="mb-1 mt-3 fw-bold">Idiomas</p>
                            <Select
                                isMulti={true}
                                options={[
                                    { value: 'pt', label: 'Português' },
                                    { value: 'en', label: 'Inglês' },
                                    { value: 'es', label: 'Espanhol' },
                                ]}
                                className="react-select"
                                classNamePrefix="react-select">
                                </Select>
                            </div>

                            <div className="mb-3 mt-3">

                            <Form.Group>
                                <Form.Label htmlFor="file">Imagem de perfil</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            </div>
                            </div>

                            {/*<div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        I accept <Link to="#">Terms and Conditions</Link>
                                    </label>
                                </div>
            </div>*/}

                            
                        </form>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    
                            <Button variant="primary" type="submit" onClick={toggleAttendantEdit}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                </Modal>
                
                
            </div>
    );
};

const ModalPositions = (data) => {
    const [modal, setModal] = useState(false);
    const [className, setClassName] = useState(null);

    

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

    const confirmed = () => {
        
            deleteuser({ cpfUsers: data.data.data.data.original.cpfUsers });
            window.location.reload(false);

        //setModal(!modal);
    }

    /**
     * Opens modal with custom class
     */
    const openModalWithClass = (className) => {
        setClassName(className);
        toggle();
    };
    return (
        <>
            

                    <Button variant="primary" className="me-2 mb-1" onClick={() => openModalWithClass('modal-dialog-centered')}>
                    <i className="mdi mdi-delete"></i>
                    </Button>

                    

                    <Modal show={modal} onHide={toggle} dialogClassName={className}>
                        <Modal.Header onHide={toggle} closeButton className='modal-colored-header bg-primary'>
                        </Modal.Header>
                        <Modal.Body className="mt-3 mb-3">
                            <h4 className="text-center">Tem certeza que deseja realizar essa exclusão?</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={toggle}>
                                Não
                            </Button>{' '}
                            <Button variant="primary" onClick={confirmed}>
                                Sim
                            </Button>
                        </Modal.Footer>
                    </Modal>
        </>
    );
};

const ModalDetails = () => {
    const [modal, setModal] = useState(false);
    const [className, setClassName] = useState(null);

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

    /**
     * Opens modal with custom class
     */
    const openModalWithClass = (className) => {
        setClassName(className);
        toggle();
    };
    return (
        <>
            

                    <Button variant="primary" className="me-2 mb-1" onClick={() => openModalWithClass('modal-dialog-centered')}>
                    <i className="mdi mdi-eye"></i>
                    </Button>

                    <Modal show={modal} onHide={toggle} dialogClassName={className}>
                        <Modal.Header onHide={toggle} closeButton className='modal-colored-header bg-primary'><h4 className="modal-title">Detalhes</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <StatusEmployees />
                            <StatisticsEmployees />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={toggle}>
                                Fechar
                            </Button>{' '}
                        </Modal.Footer>
                    </Modal>
        </>
    );
};


const ModalsEmployeesAction = (data): React$Element<React$FragmentType> => {
    return (
        <>
            {/*<PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/modals' },
                    { label: 'Modals', path: '/ui/modals', active: true },
                ]}
                title={'Modals'}
            />*/}

            <Row>
                {/*<Col md={6}>
                    <ModalSizes />
        </Col>*/}
                    
                <Col md="1">
                    <ModalsWithPagesArea data={data}/>
                    </Col>
                    
            </Row>

            {/*<Row>
                <Col md={6}>
                    <ModalWithAlerts />
                </Col>

                <Col md={6}>
                    <ModalPositions />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <ModalWithColoredHeader />
                </Col>

                <Col md={6}>
                    <ModalWithFilled />
                </Col>
            </Row>

            <Row>
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

export default ModalsEmployeesAction;