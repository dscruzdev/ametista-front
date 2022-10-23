// @flow
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StatisticsEmployees = (): React$Element<React$FragmentType> => {
    return (
        <Row>
            <Col xs={12}>
                <Card className="widget-inline mb-0">
                    <Card.Body className="p-0">
                        <Row className="g-0">

                        <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0">
                                    <Card.Body className="text-center">
                                        <i className="uil-smile text-muted font-24"></i><i className="uil-meh-alt text-muted font-24"></i><i className="uil-sad text-muted font-24"></i>
                                        <h3>
                                            <span>70</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">CSAT</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0 border-start">
                                    <Card.Body className="text-center">
                                    <i className="uil-smile text-muted font-24"></i><i className="uil-meh-alt text-muted font-24"></i><i className="uil-sad text-muted font-24"></i>
                                        <h3>
                                            <span>31</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">CES</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            

                            <Col sm={12} lg={4}>
                                <Card className="shadow-none m-0 border-start">
                                    <Card.Body className="text-center">
                                    <i className="uil-smile text-muted font-24"></i><i className="uil-meh-alt text-muted font-24"></i><i className="uil-sad text-muted font-24"></i>
                                        <h3>
                                            <span>89</span>
                                        </h3>
                                        <p className="text-muted font-15 mb-0">NPS</p>
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

export default StatisticsEmployees;
