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
import { area } from '../apps/Registers/Data';
import { useAsync } from "react-async";
// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';
const ModalsWithPagesArea = (datas) => {
    const [AttendantEditModal, setAttendantEditModal] = useState(false);
    const [SubjectEditModal, setSubjectEditModal] = useState(false);
    const [LanguageEditModal, setLanguageEditModal] = useState(false);
    const [AreaEditModal, setAreaEditModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');
    const [areadata, setArea] = useState(datas.data.data.original.name);
    const [subject, setSubject] = useState(datas.data.data.original.name);
    const [language, setLanguage] = useState(datas.data.data.original.language);
    const [areaarray, setAreaarray] = useState(datas.data.data.original.areas);

    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */


    const toggleModalEdit = (className) => {
        console.log(datas)
        if (datas.data.data.original.idAreas) {
            setHeaderClassName(className);
            setAreaEditModal(!AreaEditModal);
        }
        if (datas.data.data.original.idSubjects) {
            setHeaderClassName(className);
            setSubjectEditModal(!SubjectEditModal);
        }
        if (datas.data.data.original.idLanguages) {
            setHeaderClassName(className);
            setLanguageEditModal(!LanguageEditModal);    
        }
        //setAttendantEditModal(!AttendantEditModal);
    };
    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/

    const submitArea = (event) => {
        event.preventDefault();
        updatearea({ idAreas: datas.data.data.original.idAreas, name: areadata });
        setAreaEditModal(!AreaEditModal);
        window.location.reload(true);
    };
    const submitSubject = (event) => {
        event.preventDefault();
        updatesubject({ idSubjects: datas.data.data.original.idSubjects, name: subject, areas:areaarray })
        setSubjectEditModal(!SubjectEditModal);
        window.location.reload(true);
    };
    const submitLanguage = (event) => {
        event.preventDefault();
        updatelanguage({ idLanguages: datas.data.data.original.idLanguages, language: language })
        setLanguageEditModal(!LanguageEditModal);
        window.location.reload(true);
    };
    const { data, error, isPending } = useAsync({ promiseFn: area });
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        const areas = []
        data.forEach(area => {
            areas.push({ value: area.idAreas, label: area.name })
        });
        return (
            <div>

                <Button variant="primary" className="me-2 mb-1" onClick={() => { toggleModalEdit('primary') }}>
                    <i className="mdi mdi-square-edit-outline"></i>
                </Button>


                <ModalPositions data={datas} />



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
                                    value={areadata}
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

                <Modal show={SubjectEditModal} onHide={toggleModalEdit}>
                    <Modal.Header
                        onHide={toggleModalEdit}
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
                                    value={subject}
                                    onChange={event => setSubject(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <p className="mb-1 mt-3 fw-bold">Áreas relacionadas</p>
                                <Select
                                    onChange={(area) => setAreaarray(area)}
                                    isMulti={true}
                                    options={
                                        areas
                                    }
                                    value={areaarray}
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

                <Modal show={LanguageEditModal} onHide={toggleModalEdit}>
                    <Modal.Header
                        onHide={toggleModalEdit}
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
                                    value={language}
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
            </div>
        );
    }
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
        window.location.reload(false);
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