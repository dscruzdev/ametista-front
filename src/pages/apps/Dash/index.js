// @flow
import React, { useState } from 'react';
import { Row, Col, Nav, Card, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import HyperDatepicker from '../../../components/Datepicker';
import CampaignsChart from './CampaignsChart';

import Statistics from './Statistics';
import Status from './Status';
//import SessionsChart from './SessionsChart';
import Channels from './Channels';
import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';
import Summary from './Summary';

const Dash = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    /*
     * handle date change*/
    
    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
        }
    }; 
    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="d-flex">
                                <div className="input-group">
                                 <HyperDatepicker
                                        value={selectedDate}
                                        inputClass="form-control-light"
                                        onChange={(date) => {
                                            onDateChange(date);
                                        }}
                                    />
                                    </div>

                            </form>
                        </div>
                        <h4 className="page-title">Início</h4>
                    </div>
                    <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="1" className="nav-link rounded-0">
                                            <i className='mdi mdi-account-circle font-18'></i>
                                            <span className="d-none d-lg-block">Billing Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="2" className="nav-link rounded-0">
                                            <i className='mdi mdi-truck-fast font-18'></i>
                                            <span className="d-none d-lg-block">Shipping Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Row>
                                    <Col lg={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Billing />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Shipping />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
                </Col>
            </Row>

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

            <div className="mt-2 mb-3 text-end">
                        <Link to="#">
                            Ver mais<i className="uil uil-arrow-right ms-1"></i>
                        </Link>
                    </div>

            {/*<Row>
                <Col>
                    <CountrySessionsChart />
                </Col>
            </Row>

             <Row>
                <Col xl={6} lg={12}>
                    <ViewsChart />
                </Col>
               {/* <Col xl={4} lg={6}>
                    <BrowsersChart />
                </Col>
                <Col xl={6} lg={6}>
                    <OsChart />
        </Col>
            </Row>*/}

            {/*<Row>
                <Col xl={4} lg={6}>
                    <Channels />
                </Col>
                <Col xl={4} lg={6}>
                    <Social />
                </Col>
                <Col xl={4} lg={6}>
                    <Engagement />
                </Col>
            </Row>*/}
        </>
    );
};

export default Dash;
