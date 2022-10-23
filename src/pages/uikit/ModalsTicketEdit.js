// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';


// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalsWithPagesArea = () => {
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
                
                <Button variant="light" className="m-0" onClick={toggleAttendantEdit}>
                    <i className="mdi mdi-square-edit-outline"></i>
                </Button>

                {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

                {/* Sign up Modal */}
                <Modal show={AttendantEditModal} onHide={toggleAttendantEdit}>
                    <Modal.Header onHide={toggleAttendantEdit}
                            closeButton className='modal-colored-header bg-primary'>
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
                            <p className="mb-1 mt-3 fw-bold">Assunto</p>
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



const ModalsTicketEdit = (): React$Element<React$FragmentType> => {
    return (
        <>
            {/*<PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/modals' },
                    { label: 'Modals', path: '/ui/modals', active: true },
                ]}
                title={'Modals'}
            />*/}

                {/*<Col md={6}>
                    <ModalSizes />
        </Col>*/}
                    
                <Col className="mt-1 mb-1 text-sm-end">
                    <ModalsWithPagesArea />
                </Col>
                    
           

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

export default ModalsTicketEdit;
