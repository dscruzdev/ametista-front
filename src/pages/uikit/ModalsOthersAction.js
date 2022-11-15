// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import StatisticsEmployees from '../apps/Registers/StatisticsEmployees';
import StatusEmployees from '../apps/Registers/StatusEmployees';
import { updatearea, updatelanguage, updatesubject, deletearea, deletelanguage, deletesubject } from '../../helpers/'

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';

const ModalWithColoredHeader1 = () => {
    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');
    const [area, setArea] = useState('');


    /**
     * Show/hide the modal
     */
    const toggle = (data) => {
        //console.log(data['nome']);
        //createarea({name:data});
        setModal(!modal);
    };

    const submitArea = (event) => {
        event.preventDefault();
        updatearea({ name: area });
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
                <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitArea}>
                    <Modal.Body>


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
                                name="area"
                                onChange={event => setArea(event.target.value)}
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

const ModalWithColoredHeader2 = () => {
    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');
    const [subject, setSubject] = useState('');

    const submitSubject = (event) => {
        event.preventDefault();
        updatesubject({ name: subject })
        setModal(!modal);
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
    const areas = [];
    // area.forEach(data => {
    //     areas.push({value:data.idAreas, label:data.name})
    // });
    
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
                    <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitSubject}>
                        <Modal.Body>


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
                                    name="subject"
                                    onChange={event => setSubject(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <p className="mb-1 mt-3 fw-bold">Áreas relacionadas</p>
                                <Select
                                    isMulti={true}
                                    options={
                                        areas
                                    }
                                    className="react-select"
                                    classNamePrefix="react-select">
                                </Select>
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

const ModalWithColoredHeader3 = () => {
    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');
    const [language, setLanguage] = useState('');

    const submitLanguage = (event) => {
        event.preventDefault();
        updatelanguage({ language: language })
        setModal(!modal);
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

            <Button variant="primary-light2" className="mb-2 " onClick={() => openModalWithHeaderClass('primary-light2')}>
                <i className="mdi mdi-plus-circle me-1"></i> Cadastrar idioma
            </Button>


            <Modal show={modal} onHide={toggle}>
                <Modal.Header
                    onHide={toggle}
                    closeButton
                    className={classNames('modal-colored-header', 'bg-' + headerClassName)}>

                </Modal.Header>
                <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitLanguage}>
                <Modal.Body>

                    
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
                                name="language"
                                onChange={event => setLanguage(event.target.value)}
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

const ModalsWithPagesArea = (data) => {
    const [AttendantEditModal, setAttendantEditModal] = useState(false);
    const [SubjectEditModal, setSubjectEditModal] = useState(false);
    const [LanguageEditModal, setLanguageEditModal] = useState(false);
    const [AreaEditModal, setAreaEditModal] = useState(false);
    const [area, setArea] = useState(data.data.data.original.name);

    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */



    const toggleModalEdit = () => {
        if (data.data.data.original.idAreas) {
            setAreaEditModal(!AreaEditModal);
            console.log({ idAreas: data.data.data.original.idAreas });
        }
        if (data.data.data.original.idSubjects) {
            setLanguageEditModal(!LanguageEditModal);
            console.log({ idSubjects: data.data.data.original.idSubjects });

        }
        if (data.data.data.original.idLanguages) {
            setSubjectEditModal(!SubjectEditModal);
            console.log({ idLanguages: data.data.data.original.idLanguages });

        }
        //setAttendantEditModal(!AttendantEditModal);
    };
    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/

    const submitArea = (event) => {
        event.preventDefault();
        updatearea({ idAreas:data.data.data.original.idAreas,name: area });
        setAreaEditModal(!AreaEditModal);
    };



    return (
        <div>

            <Button variant="primary" className="me-2 mb-1" onClick={toggleModalEdit}>
                <i className="mdi mdi-square-edit-outline"></i>
            </Button>


            <ModalPositions data={data} />



            {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

            {/* Sign up Modal */}

            <Modal show={AreaEditModal} onHide={toggleModalEdit}>
                <Modal.Header
                    onHide={toggleModalEdit}
                    closeButton
                    className={classNames('modal-colored-header', 'bg-' + headerClassName)}>

                </Modal.Header>
                <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitArea}>
                    <Modal.Body>


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
                                name="area"
                                onChange={event => setArea(event.target.value)}
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
        if (data.data.data.data.original.idAreas) {
            deletearea({ idAreas: data.data.data.data.original.idAreas });
        }
        if (data.data.data.data.original.idSubjects) {
            deletesubject({ idSubjects: data.data.data.data.original.idSubjects });

        }
        if (data.data.data.data.original.idLanguages) {
            deletelanguage({ idLanguages: data.data.data.data.original.idLanguages });

        }
        setModal(!modal);
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

const ModalsOthersAction = (data): React$Element<React$FragmentType> => {
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
                    <ModalsWithPagesArea data={data} />
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

export default ModalsOthersAction;