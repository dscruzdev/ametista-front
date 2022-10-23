// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, Row, Col } from 'react-bootstrap';

// component

const CampaignsChart = (): React$Element<any> => {
    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 320,
            type: 'radialBar',
        },
        colors: ['#ffbc00', '#39afd1', '#0acf97', '#573668',],
        labels: ['Financeiro', 'Produto', 'Dúvidas', 'Outros',],
        plotOptions: {
            radialBar: {
                track: {
                    margin: 4,
                },
            },
        },
    };

    const apexBarChartData = [86, 36, 50, 10];

    return (
        <Card>
            <Card.Body>
            <h4 className="header-title  mt-2 mb-1">Principais tópicos dos chamados</h4>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="radialBar"
                    className="apex-charts"
                    height={200}
                />

                <Row className="text-center mt-1">
                    <Col sm={3}>
                        <h5 className="fw-bold">
                            <span>6,510</span>
                        </h5>
                        <p className="text-muted mb-0 mb-2 font-12">
                            <i className="mdi mdi-checkbox-blank-circle text-warning"></i> Financeiro
                        </p>
                    </Col>
                    <Col sm={3}>
                        <h5 className="fw-bold">
                            <span>3,487</span>
                        </h5>
                        <p className="text-muted mb-0 mb-2 font-12">
                            <i className="mdi mdi-checkbox-blank-circle text-info"></i> Produto
                        </p>
                    </Col>
                    <Col sm={3}>
                        <h5 className="fw-bold">
                            <span>3,487</span>
                        </h5>
                        <p className="text-muted mb-0 mb-2 font-12">
                            <i className="mdi mdi-checkbox-blank-circle text-success"></i> Dúvidas
                        </p>
                    </Col>
                    <Col sm={3}>
                        <h5 className="fw-bold ">
                            <span>1,568</span>
                        </h5>
                        <p className="text-muted mb-0 mb-2 font-12">
                            <i className="mdi mdi-checkbox-blank-circle text-primary"></i> Outros
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CampaignsChart;
