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
    const [DescriptionEditModal, setDescriptionEditModal] = useState(false);
    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */
    const toggleDescriptionEdit = () => {
        setDescriptionEditModal(!DescriptionEditModal);
    };

    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/

    return (
        <div>
            
                <Button className="btn-sm" variant="light" onClick={toggleDescriptionEdit}>
                        <i className=" mdi mdi-square-edit-outline"></i>
                </Button>
                
              

                {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

                {/* Sign up Modal */}
                <Modal show={DescriptionEditModal} onHide={toggleDescriptionEdit}>
                        <form className="ps-3 pe-3 mt-2" action="#">
                            <div className="mb-3">
                            <FormInput
                                    label="Descrição"
                                    type="textarea"
                                    name="textarea"
                                    rows="5"
                                    containerClass={'mt-2 mb-3'}
                                    key="textarea"
                                    
                                />
                            
                            <div className="mb-3 text-center">
                                <button className="btn btn-primary" type="submit">
                                    Salvar
                                </button>
                            </div>
                            </div>
                        </form>
                </Modal>
                
                
            </div>
    );
};


const ModalsDescriptionEdit = (): React$Element<React$FragmentType> => {
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

export default ModalsDescriptionEdit;
