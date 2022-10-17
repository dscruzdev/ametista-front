// @flow
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Statistics = (): React$Element<React$FragmentType> => {
    return (
        <Row>
            <Col xs={12}>
                <Card className="widget-inline">
                    <Card.Body className="p-0">
                        <Row className="g-0">
                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0">
                                    <Card.Body className="text-center">
                                        <i className="dripicons-message text-muted font-24"></i>
                                        <h3>
                                            <span>29</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">Total de chamados</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0 border-start">
                                    <Card.Body className="text-center">
                                        <i className="dripicons-user-group text-muted font-24"></i>
                                        <h3>
                                            <span>31</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">Atendentes disponíveis</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0 border-start">
                                    <Card.Body className="text-center">
                                        <i className="dripicons-clock text-muted font-24"></i>
                                        <h3>
                                            <span>10 min</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">Tempo médio de espera</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                           

                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Statistics;
