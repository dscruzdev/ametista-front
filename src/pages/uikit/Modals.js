// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput, VerticalForm } from '../../components/';
//import { password } from '../../components/FormInput';
import Select from 'react-select';
import { createuser } from '../../helpers';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';


const ModalsWithPages = () => {
    const [signUpModal, setSignUpModal] = useState(false);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const [signInModal, setSignInModal] = useState(false);

    const submitUser = (formData) => {
        console.log(formData['password']);
        //createuser({ name: name, cpfUsers: cpf, email: email});
        
    };

    //console.log(password)

    /**
     * Show/hide the modal
     */
    const toggleSignUp = () => {
        setSignUpModal(!signUpModal);
    };

    /*const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };*/
    const dispatch = useDispatch();

    return (
        <div>
            <Row>
                <Col sm={5}>
                    <Button variant="primary" className="mb-2" onClick={toggleSignUp}>
                        <i className="mdi mdi-plus-circle me-1"></i> Cadastrar funcionário
                    </Button>
                </Col>

                <Col sm={7}>
                    <div className="text-sm-end">
                        <Button variant="light" className="mb-2">
                            Exportar
                        </Button>
                    </div>
                </Col>
            </Row>


            {/*<Button variant="info" onClick={toggleSignIn}>
                    Log In Modal
                </Button>*/}

            {/* Sign up Modal */}
            <Modal show={signUpModal} onHide={toggleSignUp}>
                <Modal.Header onHide={toggleSignUp}
                    closeButton className='modal-colored-header bg-primary'>
                    <h4 className="modal-title">Cadastro de funcionário</h4>
                </Modal.Header >=
                <form className="ps-3 pe-3 mt-2" action="#" onSubmit={submitUser}>
                    <Modal.Body>

                        <div className="mb-3">
                            <FormInput
                                label="Nome"
                                type="text"
                                name="name"
                                containerClass={'mb-3'}
                                //register={name}
                                key="text"
                                //errors={errors}
                                //{control}
                                onChange={event => setName(event.target.value)}
                            />


                            <div className="mb-3">
                                <FormInput
                                    label="CPF"
                                    type="text"
                                    name="cpf"
                                    containerClass={'mb-3'}
                                    //register={register}
                                    key="text"
                                    //errors={errors}
                                    //{control}
                                    onChange={event => setCpf(event.target.value)}
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
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <FormInput
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    containerClass={'mb-3'}
                                    onChange={(event) => console.log(FormInput.event)}
                                    //onChange={event => setPassword(event.target.value)}
                                //register={password}
                                //key="password"
                                //value={password}
                                />
                            </div>

                            <div className="mb-3">
                                <p className="mb-1 mt-3 fw-bold">Área</p>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    options={[
                                        { value: 'administrativo', label: 'Administrativa' },
                                        { value: 'marketing', label: 'Marketing' },
                                        { value: 'comercial', label: 'Comercial' },
                                    ]}>
                                </Select>
                            </div>

                            <div className="mb-3">
                                <p className="mb-1 mt-3 fw-bold">Idiomas</p>
                                <Select
                                    isMulti={true}
                                    options={[
                                        { value: 'pt', label: 'Português' },
                                        { value: 'en', label: 'Inglês' },
                                        { value: 'es', label: 'Espanhol' },
                                    ]}
                                    className="react-select"
                                    classNamePrefix="react-select">
                                </Select>


                                <div className="mb-3 mt-3">

                                    <Form.Group>
                                        <Form.Label htmlFor="file">Imagem de perfil</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </div>

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

            {/* Sign in Modal 
                <Modal show={signInModal} onHide={toggleSignIn}>
                    <Modal.Body>
                        <form className="ps-3 pe-3" action="#">
                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="emailaddress"
                                    required=""
                                    placeholder="john@deo.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    required=""
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn btn-rounded btn-primary" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>*/}
        </div >
    );
};

const ModalWithAlerts = () => {
    const [modal, setModal] = useState(false);
    const [className, setClassName] = useState('');

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
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal based Alerts</h4>


                <Button variant="primary" onClick={() => openModalWithClass('success')}>
                    <i className="mdi mdi-delete"></i>
                </Button>
                <Button variant="success" className="me-1" onClick={() => openModalWithClass('success')}>
                    Success Alert
                </Button>
                <Button variant="info" className="me-1" onClick={() => openModalWithClass('info')}>
                    Info Alert
                </Button>
                <Button variant="warning" className="me-1" onClick={() => openModalWithClass('warning')}>
                    Warning Alert
                </Button>
                <Button variant="danger" className="me-1" onClick={() => openModalWithClass('danger')}>
                    Danger Alert
                </Button>

                <Modal show={modal} onHide={toggle} size="sm">
                    <div className={classNames('modal-filled', 'bg-' + className)}>
                        <Modal.Body className="p-4">
                            <div className="text-center">
                                <i className="dripicons-checkmark h1"></i>
                                <h4 className="mt-2">Well Done!</h4>
                                <p className="mt-3">
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam.
                                </p>
                                <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">
                                    Continue
                                </button>
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const ModalPositions = () => {
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
            <Card>
                <Card.Body>
                    <h4 className="header-title">Modal Position</h4>

                    <p className="text-muted">
                        Specify the position for the modal. You can display modal at top, bottom, center or right of
                        page by specifying classes <code>modal-top</code>, <code>modal-bottom</code>,{' '}
                        <code>modal-dialog-centered</code> and <code>modal-right</code>
                        respectively.
                    </p>

                    <div className="button-list">
                        <Button variant="secondary" onClick={() => openModalWithClass('modal-top')}>
                            Top
                        </Button>
                        <Button variant="secondary" onClick={() => openModalWithClass('modal-right')}>
                            Right
                        </Button>
                        <Button variant="secondary" onClick={() => openModalWithClass('modal-bottom')}>
                            Bottom
                        </Button>
                        <Button variant="secondary" onClick={() => openModalWithClass('modal-dialog-centered')}>
                            Center
                        </Button>
                    </div>

                    <Modal show={modal} onHide={toggle} dialogClassName={className}>
                        <Modal.Header onHide={toggle} closeButton>
                            <h4 className="modal-title">Modal Heading</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Text in a modal</h5>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={toggle}>
                                Close
                            </Button>{' '}
                            <Button variant="primary" onClick={toggle}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    );
};

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
            <Card>
                <Card.Body>
                    <h4 className="header-title">Colored Header Modals</h4>

                    <p className="text-muted">A rendered modal with header having contexual background color.</p>

                    <div className="button-list">
                        <Button variant="primary" onClick={() => openModalWithHeaderClass('primary')}>
                            Primary Header
                        </Button>
                        <Button variant="success" onClick={() => openModalWithHeaderClass('success')}>
                            Success Header
                        </Button>
                        <Button variant="info" onClick={() => openModalWithHeaderClass('info')}>
                            Info Header
                        </Button>
                        <Button variant="danger" onClick={() => openModalWithHeaderClass('danger')}>
                            Danger Header
                        </Button>
                        <Button variant="warning" onClick={() => openModalWithHeaderClass('warning')}>
                            Warning Header
                        </Button>
                        <Button variant="dark" onClick={() => openModalWithHeaderClass('dark')}>
                            Dark Header
                        </Button>
                    </div>

                    <Modal show={modal} onHide={toggle}>
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                            <h4 className="modal-title text-light">Modal Heading</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <h5 className="mt-0">{headerClassName} Background</h5>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={toggle}>
                                Close
                            </Button>{' '}
                            <Button variant={headerClassName} onClick={toggle}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    );
};

const ModalWithFilled = () => {
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
            <Card>
                <Card.Body>
                    <h4 className="header-title">Colored Header Modals</h4>

                    <p className="text-muted">
                        A rendered modal with header, body and footer having contexual background color.
                    </p>

                    <div className="button-list">
                        <Button variant="primary" onClick={() => openModalWithHeaderClass('primary')}>
                            Primary Filled
                        </Button>
                        <Button variant="success" onClick={() => openModalWithHeaderClass('success')}>
                            Success Filled
                        </Button>
                        <Button variant="info" onClick={() => openModalWithHeaderClass('info')}>
                            Info Filled
                        </Button>
                        <Button variant="danger" onClick={() => openModalWithHeaderClass('danger')}>
                            Danger Filled
                        </Button>
                        <Button variant="warning" onClick={() => openModalWithHeaderClass('warning')}>
                            Warning Filled
                        </Button>
                        <Button variant="dark" onClick={() => openModalWithHeaderClass('dark')}>
                            Dark Filled
                        </Button>
                    </div>

                    <Modal show={modal} onHide={toggle}>
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-filled', 'bg-' + headerClassName)}>
                            <h4 className="modal-title text-light">{headerClassName} Filled Modal</h4>
                        </Modal.Header>
                        <Modal.Body className={classNames('modal-filled', 'bg-' + headerClassName, 'text-light')}>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        </Modal.Body>
                        <Modal.Footer className={classNames('modal-filled', 'bg-' + headerClassName)}>
                            <Button variant="light" onClick={toggle}>
                                Close
                            </Button>{' '}
                            <Button variant="outline-light" onClick={toggle}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    );
};

const MultipleModal = () => {
    const [modal, setModal] = useState(false);
    const [nextModal, setNextModal] = useState(false);

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

    const toggleNextModal = () => {
        toggle();
        setNextModal(!nextModal);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Multiple Modal</h4>

                    <p className="text-muted">
                        Display a series of modals one by one to guide your users on multiple aspects or take step wise
                        input.
                    </p>

                    <div className="button-list">
                        <Button onClick={toggle}>Multiple Modal</Button>
                    </div>

                    <Modal show={modal} onHide={toggle}>
                        <Modal.Header closeButton>
                            <h4 className="modal-title">Modal Heading</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Text in a modal</h5>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => setNextModal(true)}>
                                Next
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={nextModal} onHide={toggleNextModal}>
                        <Modal.Header closeButton>
                            <h4 className="modal-title">Modal Heading</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Text in a modal</h5>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={toggleNextModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    );
};

const ToggleBetweenModals = () => {
    const [modal, setModal] = useState < boolean > (false);
    const [nextModal, setNextModal] = useState < boolean > (false);

    // Show/hide the modal
    const toggle = () => {
        setModal(!modal);
    };

    const toggleNextModal = () => {
        toggle();
        setNextModal(!nextModal);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Toggle Between Modals</h4>
                <p className="sub-header">
                    Display a series of modals one by one to guide your users on multiple aspects or take step wise
                    input.
                </p>

                <div className="button-list">
                    <Button variant="secondary" onClick={toggle}>
                        Open first modal
                    </Button>
                </div>

                <Modal show={modal} onHide={toggle} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>Show a second modal and hide this one with the button below.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={toggleNextModal}>Open second modal</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={nextModal} onHide={toggleNextModal} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>Hide this modal and show the first with the button below.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={toggleNextModal}>Back to first</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const StaticBackdropModal = () => {
    const [modal, setModal] = useState(false);

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Static Backdrop</h4>

                    <p className="text-muted">
                        When backdrop is set to static, the modal will not close when clicking outside it. Click the
                        button below to try it.
                    </p>

                    <div className="button-list">
                        <Button variant="info" onClick={toggle}>
                            Static Backdrop
                        </Button>
                    </div>

                    <Modal show={modal} onHide={toggle} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            I will not close if you click outside me. Don't even try to press escape key.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={toggle}>
                                Close
                            </Button>
                            <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    );
};

const Modals = (): React$Element<React$FragmentType> => {
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


                <ModalsWithPages />
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

export default Modals;
