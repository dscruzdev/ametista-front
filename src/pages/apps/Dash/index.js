// @flow
import React, { useState } from 'react';
import { Row, Col, Nav, Card, Tab } from 'react-bootstrap';

// components
import HyperDatepicker from '../../../components/Datepicker';
import MensagensInst from './MensagensInst';
import Shipping from './Email';


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
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                    <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="1" className="nav-link rounded-0">
                                            <i className='mdi mdi-chat font-18'></i>
                                            <span className="d-none d-lg-block">Mensagens Instantâneas</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="2" className="nav-link rounded-0">
                                            <i className='mdi mdi-email font-18'></i>
                                            <span className="d-none d-lg-block">E-mail</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Row>
                                    <Col lg={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <MensagensInst />
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
        </>
    );
};

export default Dash;
