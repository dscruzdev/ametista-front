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

const ModalWithColoredHeader = () => {
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
                    <Button className="btn-sm mt-1 me-2 text-end" variant="secondary" onClick={() => openModalWithHeaderClass('primary')}>
                                <i className="uil-comment-plus me-1"></i>Comentar
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
                            <FormInput
                                    label="Comentário"
                                    type="textarea"
                                    name="textarea"
                                    rows="5"
                                    containerClass={'mt-2 mb-3'}
                                    key="textarea"
                                    
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


const ModalsWriteComments = (): React$Element<React$FragmentType> => {
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

            
                    <ModalWithColoredHeader />

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

export default ModalsWriteComments;
