// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalWithColoredHeader1 = () => {
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
             
                <Button variant="primary" className="mb-2 me-2" onClick={() => openModalWithHeaderClass('primary')}>
                    <i className="mdi mdi-plus-circle me-1"></i> Cadastrar área
                </Button>
              

                    <Modal show={modal} onHide={toggle}> 
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                           
                        </Modal.Header>
                        <Modal.Body>
                        
                        <form className="ps-3 pe-3 mt-2" action="#">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Área
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="area"
                                    required=""
                                    placeholder=""
                                />
                            </div>
                        </form>
                        
                
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant={headerClassName} onClick={toggle}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Modal>
        </>
    );
};

const ModalWithColoredHeader2 = () => {
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
                    
                <Button variant="primary-light" className="mb-2 me-2" onClick={() => openModalWithHeaderClass('primary-light')}>
                    <i className="mdi mdi-plus-circle me-1"></i> Cadastrar assunto
                </Button>

                    <Modal show={modal} onHide={toggle}> 
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                           
                        </Modal.Header>
                        <Modal.Body>
                        
                        <form className="ps-3 pe-3 mt-2" action="#">
                        <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Assunto
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="subject"
                                    required=""
                                    placeholder=""
                                />
                            </div>
                        </form>
                        
                
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant={headerClassName} onClick={toggle}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Modal>
        </>
    );
};

const ModalWithColoredHeader3 = () => {
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
             
                <Button variant="primary-light2" className="mb-2 " onClick={() => openModalWithHeaderClass('primary-light2')}>
                    <i className="mdi mdi-plus-circle me-1"></i> Cadastrar idioma
                </Button>
              

                    <Modal show={modal} onHide={toggle}> 
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                           
                        </Modal.Header>
                        <Modal.Body>
                        
                        <form className="ps-3 pe-3 mt-2" action="#">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Idioma
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="language"
                                    required=""
                                    placeholder=""
                                />
                            </div>
                        </form>
                        
                
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant={headerClassName} onClick={toggle}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Modal>
        </>
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
<Col>
<ModalWithColoredHeader1 />
<ModalWithColoredHeader2 />
<ModalWithColoredHeader3 />
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

export default ModalsOthers;
