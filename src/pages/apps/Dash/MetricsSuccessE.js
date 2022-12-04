// @flow
import React from 'react';
import { Card, Table, ProgressBar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MetricsSuccessE = ({csatE, npsE}): React$Element<any> => {
    return (
        <Row>
        <Col xl={6}>
        <Card>
            <Card.Body  className="bg-primary-light card">
                {/*<Link to="#" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
    </Link>*/}
                <Card className="shadow-none m-0 bg-primary-light">
            
                                    <Card.Body className="text-center">
                                    <i className="uil-smile text-white font-24"></i><i className="uil-meh-alt text-white font-24"></i><i className="uil-sad text-white font-24"></i>
                                        <h3 className="text-white">
                                            <span>{(csatE)}%</span>
                                        </h3>
                                        <p className="text-white font-16 mb-0">Customer Satisfation Score (CSAT)</p>
                                    </Card.Body>
                </Card>
               
            </Card.Body>
        </Card>
        </Col>

        

        <Col xl={6}>
        <Card>
            <Card.Body  className="bg-primary-light card">
                {/*<Link to="#" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
    </Link>*/}
                <Card className="shadow-none m-0 bg-primary-light">
                                    <Card.Body className="text-center">
                                    <i className="uil-smile text-white font-24"></i><i className="uil-meh-alt text-white font-24"></i><i className="uil-sad text-white font-24"></i>
                                        <h3 className="text-white">
                                            <span>{(npsE)}</span>
                                        </h3>
                                        <p className="text-white font-16 mb-0">Net Promoter Score (NPS)</p>
                                    </Card.Body>
                </Card>
               
            </Card.Body>
        </Card>
        </Col>
        </Row>
    );
};

export default MetricsSuccessE;
