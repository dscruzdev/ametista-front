// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import { createcomment } from '../../helpers';

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';

const ModalWithColoredHeader = ({requestid}) => {
    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');
    const [comment, setComment] = useState('');

    const submitComment = (event) => {
        event.preventDefault();
        createcomment({ idRequests: requestid, comment: comment })
        window.location.reload(false);
    };

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
                        <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitComment}>
                        <Modal.Body>
                        
                       
                            <div className="mb-3">
                            <FormInput
                                    label="Comentário"
                                    type="textarea"
                                    name="textarea"
                                    rows="5"
                                    containerClass={'mt-2 mb-3'}
                                    key="textarea"
                                    onChange={event => setComment(event.target.value)}
                                />
                            </div>
                        
                        
                
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant={headerClassName} type="submit">
                                Salvar
                            </Button>
                        </Modal.Footer>
                        </form>
                    </Modal>
        </>
    );
};


const ModalsWriteComments = ({requestid}): React$Element<React$FragmentType> => {
    
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

            
                    <ModalWithColoredHeader requestid={requestid}/>

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
