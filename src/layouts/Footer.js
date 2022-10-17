// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = (): React$Element<any> => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col md={6}>{currentYear} © Ametista</Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
