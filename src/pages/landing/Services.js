// @flow
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';
import Rating from 'react-rating';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import {setscore}  from '../../helpers/api/';

type ServicesProps = {
    services: {
        icon: string,
        title: string,
        description: string,
    }[],
};

const Services = ({ services }: ServicesProps): React$Element<React$FragmentType> => {

    const submit = () => {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        setscore ({idRequests:id, csat:selectedVals[1]['textValue'], nps:selectedVals2[1]['textValue2']})
        window.location.href = 'landing/agradecimento'
    };
    
    const [selectedVals, setSelectedVals] = useState({
        '1': { textValue: 1},
        '2': { textValue: 2},
    });

    const [selectedVals2, setSelectedVals2] = useState({
        '1': { textValue2: 1},
        '2': { textValue2: 2},
    });

    const onSlide2 = (index2, value2) => {
        let selectedValues2 = { ...selectedVals2 };
        selectedValues2[index2] = {
            textValue2: value2[0].toFixed(1),
        };
        setSelectedVals2(selectedValues2);
    };

    const onSlide = (index, value) => {
        let selectedValues = { ...selectedVals };
        selectedValues[index] = {
            textValue: value[0].toFixed(1),
        };
        setSelectedVals(selectedValues);
    };
    return (
        <>
            <section className="py-4">
                <Container>
                    
                <Col className="justify-content-center">
                    <Card>
                        <Card.Body >
                        <Row>
                        <Col>
                            <div className="text-center mb-4">
                                <h3>
                                    <span className="text-primary">Sua opinião é importante para nós!</span>
                                </h3>
                            </div>

                            <h4 className="mt-2 mb-3">
                                Em uma escala de 1 a 5, sendo 1 muito insatisfeito e 5 muito satisfeito, qual a sua satisfação com o atendimento?
                            </h4>
                            <Nouislider
                                range={{ min: 1, max: 5 }}
                                start={[1]}
                                step={1}
                                connect
                                onSlide={(render, handle, value, un) => onSlide(1, value)}
                            />
                            <h5 className="mt-2 mb-4">
                               Nota:{' '}
                                {selectedVals ? (
                                    <span>
                                        {selectedVals[1]['textValue']}
                                    </span>
                                ) : null}
                            </h5>
                            <h4 className="mt-2 mb-3">
                                    De 1 a 10, qual a nota que você dá ao nosso atendimento ao cliente?
                            </h4>

                            <Nouislider
                                range={{ min: 1, max: 10 }}
                                start={[1]}
                                step={1}
                                connect
                                onSlide={(render, handle, value, un) => onSlide2(1, value)}
                            />
                            <h5 className="mt-2 mb-4">
                               Nota:{' '}
                                {selectedVals2 ? (
                                    <span>
                                        {selectedVals2[1]['textValue2']}
                                    </span>
                                    
                                ) : null}
                            </h5>
                            <div className="text-sm-center">
                            <Button variant="primary" onClick={submit}>
                                Enviar
                            </Button>
                            </div>

                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
               </Col>
                </Container>
            </section>
        </>
    );
};

export default Services;
