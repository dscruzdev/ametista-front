import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// component
import CardTitle from '../../../components/CardTitle';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusEmployees = (): React$Element<any> => {
    const colors = ['#0acf97', '#573668', '#fa5c7c'];

    const donutChartData = {
        labels: ['Concluído', 'Em andamento', 'Em espera'],
        datasets: [
            {
                data: [64, 26, 10],
                backgroundColor: colors,
                borderColor: 'transparent',
                borderWidth: '3',
            },
        ],
    };

    const donutChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: '75%',
    };

    return (
        <Card className="mb-2">
            <Card.Body>
                  <h3 className="header-title mb-2">Chamados</h3>

                <div className="my-2 chartjs-chart" style={{ height: '140px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>

                <Row className="text-center mt-2">
                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-check-circle-outline text-success mt-2 h3"></i>
                            <h4 className="fw-bold">
                                <span>64%</span>
                            </h4>
                            <p className="text-muted mb-0">Concluído</p>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-progress-check text-primary mt-2 h3"></i>
                            <h4 className="fw-bold">
                                <span>26%</span>
                            </h4>
                            <p className="text-muted mb-0"> Em andamento</p>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-progress-clock text-danger mt-2 h3"></i>
                            <h4 className="fw-bold">
                                <span>10%</span>
                            </h4>
                            <p className="text-muted mb-0"> Em espera</p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default StatusEmployees;
