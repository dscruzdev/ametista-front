// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import { updateinfos, getlanguages, getsubjects } from '../../helpers/'


// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalsWithPagesArea = ({ selectedUser }) => {
    const [TicketEditModal, setTicketEditModal] = useState(false);

    const [once, setOnce] = useState(false);
    const [name, setName] = useState(selectedUser.name);
    const [loadedsubjects, setLoadedSubjects] = useState([]);
    const [subject, setSubject] = useState({ value: selectedUser.requests[0].idSubject, label: selectedUser.requests[0].subject });
    const [loadedlanguages, setLoadedLanguages] = useState([]);
    const [language, setLanguage] = useState({ value: selectedUser.requests[0].idLanguage, label: selectedUser.requests[0].language });
    const [email, setEmail] = useState(selectedUser.email);
    const [phone, setPhone] = useState(selectedUser.phone);
    const [descricao, setDescricao] = useState(selectedUser.requests[0].description);

    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */

    const submitTicketInfos = (event) => {
        event.preventDefault();
        updateinfos({ cpfClients: selectedUser.cpfClients, idRequests: selectedUser.requests[0].idRequests, name: name, phone: phone, email: email, subject: subject.value, language: language.value, description: descricao });
        setTicketEditModal(!TicketEditModal);

        window.location.reload(true);
    };



    const toggleTicketEdit = () => {
        setTicketEditModal(!TicketEditModal);
        setName(selectedUser.name);
        setEmail(selectedUser.email);
        setPhone(selectedUser.phone);
        setLanguage({ value: selectedUser.requests[0].idLanguage, label: selectedUser.requests[0].language });
        setSubject({ value: selectedUser.requests[0].idSubject, label: selectedUser.requests[0].subject });
        setDescricao(selectedUser.requests[0].description);
    };
    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/
    if (!once) {
        const loadedLanguages = [];
        getlanguages().then((data) => {
            console.log(data)
            var data1 = data.data
            data1.forEach(language => {
                loadedLanguages.push({ value: language.idLanguages, label: language.language })
            });
            setLoadedLanguages(loadedLanguages);
            setOnce(true);
        });
    }

    if (!once) {
    const loadedSubjects = [];
    getsubjects().then((data) => {
        
        data.data.forEach(subject => {
            loadedSubjects.push({ value: subject.idSubjects, label: subject.name })
        });
        setLoadedSubjects(loadedSubjects);
        console.log(loadedSubjects)
        setOnce(true);
    });
    }
    return (
        <div>

            <Button variant="light" className="m-0" onClick={toggleTicketEdit}>
                <i className="mdi mdi-square-edit-outline"></i>
            </Button>

            {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

            {/* Sign up Modal */}
            <Modal show={TicketEditModal} onHide={toggleTicketEdit}>
                <Modal.Header onHide={toggleTicketEdit}
                    closeButton className='modal-colored-header bg-primary'>
                </Modal.Header>
                <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitTicketInfos}>
                    <Modal.Body>

                        <div className="mb-3">
                            <FormInput
                                label="Nome"
                                type="text"
                                name="name"
                                containerClass={'mb-3'}
                                //register={register}
                                key="text"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                            </div>

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
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                            <FormInput
                                label="Telefone"
                                type="text"
                                name="phone"
                                containerClass={'mb-3'}
                                //register={register}
                                key="text"
                                value={phone}
                                onChange={event => setPhone(event.target.value)}
                            />

                            <div className="mb-3">
                                <p className="mb-1 mt-3 fw-bold">Idioma</p>
                                <Select
                                    isMulti={false}
                                    onChange={(language) => setLanguage(language)}
                                    options={loadedlanguages}
                                    value={language}
                                    className="react-select"
                                    classNamePrefix="react-select">
                                </Select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <p className="mb-1 mt-3 fw-bold">Assunto</p>
                            <Select
                                onChange={(subject) => setSubject(subject)}
                                isMulti={false}
                                options={loadedsubjects}
                                value={subject}
                                className="react-select"
                                classNamePrefix="react-select">
                            </Select>
                        </div>

                        <div className="mb-3">
                                <FormInput
                                    label="Descrição"
                                    type="text"
                                    name="descricao"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="text"
                                    //errors={errors}
                                    //{control}
                                    value={descricao}
                                    onChange={event => setDescricao(event.target.value)}
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




                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>


        </div>
    );
};



const ModalsTicketEdit = ({ selectedUser }): React$Element<React$FragmentType> => {
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
                <ModalsWithPagesArea selectedUser={selectedUser} />
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
