// @flow
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import StatisticsM from './StatisticsM';
import MetricsSuccessM from './MetricsSuccessM';


// Billing
const MensagensInst = (): React$Element<React$FragmentType> => {
    /*
     * form validation schema
     */
    return (
        <>
            <Row>
               <Col xl={12} lg={12}>
                    <StatisticsM />
                </Col>
            </Row>

             <Row>
                <Col>
                    <MetricsSuccessM />
                </Col>
            </Row>
        </>
    );
};

export default MensagensInst;