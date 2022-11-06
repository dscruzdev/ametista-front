// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

// components
import Logo from '../../assets/images/logo-2.png';

// images
import notFoundImg from '../../assets/images/startman.svg';

const ServerError = (): React$Element<React$FragmentType> => {
    return (
        <>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} xxl={4}>
                            <Card>
                                {/* logo */}
                                <Card.Header className="pt-4 pb-4 text-center bg-primary">
                                    <Link to="/">
                                        <span>
                                            <img src={Logo} alt="" height="32" />
                                        </span>
                                    </Link>
                                </Card.Header>

                                <Card.Body className="p-4">
                                    <div className="text-center">

                                        <h1 className="text-error mt-4">500</h1>
                                        <h4 className="text-uppercase text-danger mt-3">Erro interno do servidor</h4>
                                        <p className="text-muted mt-3">
                                            Que tal atualizar a página? Caso o erro persista, entre em contato com o suporte.
                                        </p>

                                        <Link className="btn btn-primary mt-3" to="/">
                                            <i className="mdi mdi-reply"></i> Voltar ao início
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            <footer className="footer footer-alt">2018 - 2021 © Hyper - Coderthemes.com</footer>
        </>
    );
};

export default ServerError;
