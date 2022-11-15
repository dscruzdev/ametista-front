// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import { createarea, createsubject, createlanguage } from '../../helpers';
import { useAsync } from "react-async";
import { area } from '../apps/Registers/Data';


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
        createarea({ name: area });
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
    const [areaarray, setArea] = useState('');

    const submitSubject = (event) => {
        event.preventDefault();
        createsubject({ name: subject, areas: areaarray })
        console.log({subject, areaarray })
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

    const { data, error, isPending } = useAsync({ promiseFn: area });

    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        const areas = []
        data.forEach(area => {    
            areas.push ({value:area.idAreas,label:area.name})
        })
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
                                    onChange={(area)=> setArea (area)}
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
                                }
};

const ModalWithColoredHeader3 = () => {
    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');
    const [language, setLanguage] = useState('');

    const submitLanguage = (event) => {
        event.preventDefault();
        createlanguage({ language: language })
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
