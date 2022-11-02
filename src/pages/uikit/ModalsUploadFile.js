// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import FileUploader from '../../components/FileUploader';

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalWithColoredHeader1 = () => {

    const [, setAttachments] = useState();

    /*
     * handle file upload
     */
    const handleAttachments = (files) => {
        setAttachments(files);
    };

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
             
                <Button variant="light" className="mb-2 me-2" onClick={() => openModalWithHeaderClass('light')}>
                    <i className="uil uil-paperclip"></i>
                </Button>
              

                    <Modal show={modal} onHide={toggle}> 
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                           
                        </Modal.Header>
                        <Modal.Body>
                       
                    <FileUploader
                        onFileUpload={(files) => {
                            handleAttachments(files);
                        }}
                    />
                
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


const ModalsUploadFile = (): React$Element<React$FragmentType> => {
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

export default ModalsUploadFile;
