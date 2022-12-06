// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import StatisticsEmployees from '../apps/Registers/StatisticsEmployees';
import StatusEmployees from '../apps/Registers/StatusEmployees';
import { deleteuser, updateuser } from '../../helpers/'
import { useAsync } from "react-async";
import { modaldata } from '../apps/Registers/Data';
// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalsWithPagesArea = (datas) => {
    const [headerClassName, setHeaderClassName] = useState('');
    const [EmployeeEditModal, setEmployeeEditModal] = useState(false);
    const [name, setName] = useState(datas.data.data.original.name);
    const [cpf, setCpf] = useState(datas.data.data.original.cpfUsers);
    const [email, setEmail] = useState(datas.data.data.original.email);
    const [password, setPassword] = useState(datas.data.data.original.password);
    const [areaarray, setAreaArray] = useState(datas.data.data.original.areas);
    const [languagearray, setLanguageArray] = useState(datas.data.data.original.languages);
    //const [signInModal, setSignInModal] = useState(false);

    /**
     * Show/hide the modal
     */

    const toggleEmployeeEdit = (className) => {
        console.log(datas)
        setHeaderClassName(className);
        setEmployeeEditModal(!EmployeeEditModal);
    };

    const submitEmployee = (event) => {
        event.preventDefault();
        updateuser({ cpfUsers: datas.data.data.original.cpfUsers, name: name, cpfUsers: cpf, email: email, password: password,  areas: areaarray, languages: languagearray });
        setEmployeeEditModal(!EmployeeEditModal);
        
        window.location.reload(true);
    };
    
    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/

    const { data, error, isPending } = useAsync({ promiseFn: modaldata });
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        const areas = []
        data.areas.forEach(area => {
            areas.push({ value: area.idAreas, label: area.name })
        })
        const languages = []
        data.languages.forEach(language => {
            languages.push({ value: language.idLanguages, label: language.language })
        })

    return (
        <div>
                {/*<ModalDetails />*/}
                
                <Button variant="primary" className="me-2 mb-1" onClick={toggleEmployeeEdit}>
                    <i className="mdi mdi-square-edit-outline"></i>
                </Button>


                <ModalPositions data={datas} />
                
              

                {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

                {/* Sign up Modal */}
                <Modal show={EmployeeEditModal} onHide={toggleEmployeeEdit}>
                    <Modal.Header onHide={toggleEmployeeEdit}
                            closeButton className='modal-colored-header bg-primary'>
                            <h4 className="modal-title">Cadastro de funcionário</h4>
                        </Modal.Header>
                        <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitEmployee}>
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
                                    //errors={errors}
                                    //{control}
                                />
                            

                            <div className="mb-3">
                            <FormInput
                                    label="CPF"
                                    type="text"
                                    name="cpf"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="text"
                                    value={cpf}
                                    disabled={true}
                                    onChange={event => setCpf(event.target.value)}
                                    //errors={errors}
                                    //{control}
                                />
                            </div>

                            <div className="mb-3">
                            <FormInput
                                    label="E-mail"
                                    type="text"
                                    name="email"
                                    containerClass={'mb-3'}
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    key="text"
                                    //errors={errors}
                                    //{control}
                                />
                            </div>

                            <div className="mb-3">
                                <FormInput
                                    label="Senha"
                                    type="password"
                                    name="password"
                                    containerClass={'mb-3'}
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    key="password"
                                />
                            </div>

                            <div className="mb-3">
                            <p className="mb-1 mt-3 fw-bold">Área</p>
                            <Select
                                onChange={(area) => setAreaArray(area)}
                                isMulti={true}
                                options={
                                        areas
                                    }
                                value={areaarray}
                                className="react-select"
                                classNamePrefix="react-select">
                            </Select>
                            </div>

                            <div className="mb-3">
                            <p className="mb-1 mt-3 fw-bold">Idiomas</p>
                            <Select
                                onChange={(language) => setLanguageArray(language)}
                                isMulti={true}
                                options={
                                        languages
                                    }
                                value={languagearray}
                                className="react-select"
                                classNamePrefix="react-select">
                                </Select>
                            </div>

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
        
            deleteuser({ cpfUsers: data.data.data.data.original.cpfUsers });
            window.location.reload(false);

        //setModal(!modal);
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

const ModalDetails = () => {
    const [modal, setModal] = useState(false);
    const [className, setClassName] = useState(null);

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

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
                    <i className="mdi mdi-eye"></i>
                    </Button>

                    <Modal show={modal} onHide={toggle} dialogClassName={className}>
                        <Modal.Header onHide={toggle} closeButton className='modal-colored-header bg-primary'><h4 className="modal-title">Detalhes</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <StatusEmployees />
                            <StatisticsEmployees />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={toggle}>
                                Fechar
                            </Button>{' '}
                        </Modal.Footer>
                    </Modal>
        </>
    );
};


const ModalsEmployeesAction = (data): React$Element<React$FragmentType> => {
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
                    <ModalsWithPagesArea data={data}/>
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

export default ModalsEmployeesAction;