// @flow
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import StatisticsM from './StatisticsM';
import MetricsSuccessM from './MetricsSuccessM';


// Billing
const MensagensInst = ({tempomedioM, csatM, npsM, tempomedioesperaM, fcrM}): React$Element<React$FragmentType> => {
    /*
     * form validation schema
     */
    return (
        <>
            <Row>
               <Col xl={12} lg={12}>
                    <StatisticsM tempomedioM={tempomedioM} tempomedioesperaM={tempomedioesperaM} fcrM={fcrM}/>
                </Col>
            </Row>

             <Row>
                <Col>
                    <MetricsSuccessM csatM={csatM} npsM={npsM}/>
                </Col>
            </Row>
        </>
    );
};

export default MensagensInst;
