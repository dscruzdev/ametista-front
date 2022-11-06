// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

// components
//import PageTitle from '../../components/PageTitle';

// images
import notFoundImg from '../../assets/images/file-searching.svg';

const ErrorPageNotFoundAlt = (): React$Element<React$FragmentType> => {
    return (
        <>

<Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Erro 404</h4>
                    </div>
                    </Col>
                  </Row>
           
            <div className="account-pages pt-2 pt-sm-3 pb-4 pb-sm-5">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col lg={4}>
                            <div className="text-center">
                            <h1 className="text-error">
                                            4<i className="mdi mdi-emoticon-sad"></i>4
                                        </h1>
                                <h4 className="text-uppercase text-danger mt-3">Página não encontrada</h4>
                                <p className="text-muted mt-3">
                                Parece que você pegou o caminho errado. Não se preocupe... isso acontece com os melhores de nós. Acesse o botão abaixo para voltar aos trilhos.
                                </p>

                                <Link className="btn btn-primary mt-3" to="/">
                                <i className="mdi mdi-reply"></i> Voltar ao início
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default ErrorPageNotFoundAlt;
