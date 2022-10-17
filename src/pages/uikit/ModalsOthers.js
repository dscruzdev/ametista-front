// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalsWithPagesArea = () => {
    const [AreaModal, setAreaModal] = useState(false);
    const [IdiomaModal, setIdiomaModal] = useState(false);
    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */
    const toggleArea = () => {
        setAreaModal(!AreaModal);
    };

    const toggleIdioma = () => {
        setIdiomaModal(!IdiomaModal);
    };

    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/

    return (
        <div>
                <Row>
                <Col sm={5}>
                <Button variant="primary" className="mb-2 me-2" onClick={toggleArea}>
                    <i className="mdi mdi-plus-circle me-2"></i> Cadastrar área
                </Button>
                <Button variant="primary-light" className="mb-2" onClick={toggleIdioma}>
                    <i className="mdi mdi-plus-circle me-2"></i> Cadastrar idioma
                </Button>
                </Col>

                </Row>
              

                {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

                {/* Sign up Modal */}
                <Modal show={AreaModal} onHide={toggleArea}>
                    <Modal.Body>
                        <form className="ps-3 pe-3 mt-2" action="#">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Área
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="username"
                                    required=""
                                    placeholder=""
                                />
                            </div>


                            {/*<div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        I accept <Link to="#">Terms and Conditions</Link>
                                    </label>
                                </div>
            </div>*/}

                            <div className="mb-3 text-center">
                                <button className="btn btn-primary" type="submit">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                
                <Modal show={IdiomaModal} onHide={toggleIdioma}>
                    <Modal.Body>
                        <form className="ps-3 pe-3 mt-2" action="#">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Idioma
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="username"
                                    required=""
                                    placeholder=""
                                />
                            </div>


                            {/*<div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        I accept <Link to="#">Terms and Conditions</Link>
                                    </label>
                                </div>
            </div>*/}

                            <div className="mb-3 text-center">
                                <button className="btn btn-primary" type="submit">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                {/* Sign in Modal 
                <Modal show={signInModal} onHide={toggleSignIn}>
                    <Modal.Body>
                        <form className="ps-3 pe-3" action="#">
                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="emailaddress"
                                    required=""
                                    placeholder="john@deo.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    required=""
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn btn-rounded btn-primary" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>*/}
            </div>
    );
};


const ModalsOthers = (): React$Element<React$FragmentType> => {
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

                
                    <ModalsWithPagesArea />
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

export default ModalsOthers;
