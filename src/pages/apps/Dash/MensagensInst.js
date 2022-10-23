// @flow
import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CampaignsChart from './CampaignsChart';
import Statistics from './Statistics';

import Status from './Status';
//import SessionsChart from './SessionsChart';
import Channels from './Channels';

// components
import { FormInput } from '../../../components';

// dafault data
import { countries } from './Data';

// Billing
const MensagensInst = (): React$Element<React$FragmentType> => {
    /*
     * form validation schema
     */
    return (
        <>
            <Row>
               <Col xl={12} lg={12}>
                    <Statistics />
                </Col>
            </Row>

             <Row>
                <Col xl={4} lg={6}>
                    <Status />
                </Col>
                {/*<Col xl={4} lg={6}>
                    <Statistics />
                </Col>*/}

                <Col xl={4} lg={6}>
                    <Channels />
                </Col>

                <Col xl={4} lg={6}>
                    <CampaignsChart />
                </Col>

                {/*<Col xl={4} sm={12}>
                    <StatisticsWidget
                        icon="mdi mdi-progress-star"
                        description="csat"
                        title="CSAT"
                        stats="30.56%"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '77.87%',
                            time: 'Desde mês passado',
                        }}></StatisticsWidget>

                <StatisticsWidget
                        icon="mdi mdi-star-half-full"
                        description="nps"
                        title="NPS"
                        stats="80"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '2',
                            time: 'Desde mês passado',
                        }}></StatisticsWidget>
                </Col>*/}

               

                {/*<Col xl={9} lg={8}>
                    <SessionsChart />
                                </Col>*/}
            </Row>
        </>
    );
};

export default MensagensInst;
