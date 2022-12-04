// @flow
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import StatisticsE from './StatisticsE';
import MetricsSuccessE from './MetricsSuccessE';

// Billing
const Email = ({tempomedioE, csatE, npsE}): React$Element<React$FragmentType> => {
    /*
     * form validation schema
     */
    return (
        <>
            <Row>
               <Col xl={12} lg={12}>
                    <StatisticsE tempomedioE={tempomedioE}/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <MetricsSuccessE csatE={csatE} npsE={npsE}/>
                </Col>
            </Row>
        </>
    );
};

export default Email;
