// @flow
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StatisticsE = ({tempomedioE, tempomedioesperaE, fcrE}): React$Element<React$FragmentType> => {
    return (
        <Row>
            <Col xs={12}>
                <Card className="widget-inline">
                    <Card.Body className="p-0">
                        <Row className="g-0">
                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0">
                                    <Card.Body className="text-center">
                                        <i className="mdi mdi-clock-time-four-outline text-muted font-24"></i>
                                        <h3>
                                            <span>{(tempomedioE)}h</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">Tempo Médio de Atendimento (TMA)</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0 border-start">
                                    <Card.Body className="text-center">
                                        <i className="mdi mdi-progress-clock text-muted font-24"></i>
                                        <h3>
                                            <span>{(tempomedioesperaE)}h</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">Tempo Médio de Espera (TME)</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0 border-start">
                                    <Card.Body className="text-center">
                                        <i className="uil-comment-check text-muted font-24"></i>
                                        <h3>
                                            <span>{(fcrE)}%</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">First Call Resolution (FCR)</p>
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

export default StatisticsE;
