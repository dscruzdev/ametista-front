// @flow
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import StatisticsE from './StatisticsE';
import MetricsSuccessE from './MetricsSuccessE';

// Billing
const Email = (): React$Element<React$FragmentType> => {
    /*
     * form validation schema
     */
    return (
        <>
            <Row>
               <Col xl={12} lg={12}>
                    <StatisticsE />
                </Col>
            </Row>

            <Row>
                <Col>
                    <MetricsSuccessE />
                </Col>
            </Row>
        </>
    );
};

export default Email;
