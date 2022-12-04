import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// component
import CardTitle from '../../../components/CardTitle';

ChartJS.register(ArcElement, Tooltip, Legend);

const Status = ({totalchamadosfinalizados, totalchamadosemandamento, totalchamadosaberto, totalchamados}): React$Element<any> => {
    const colors = ['#0acf97', '#ffbc00', '#fa5c7c'];

    const donutChartData = {
        labels: ['Finalizado', 'Em andamento', 'Em aberto'],
        datasets: [
            {
                data: [totalchamadosfinalizados, totalchamadosemandamento, totalchamadosaberto],
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
        <Card>
            <Card.Body>
                  <h4 className="header-title mt-2 mb-3">Status dos chamados</h4>

                <div className="my-2 chartjs-chart" style={{ height: '120px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>

                <Row className="text-center mt-2 py-2">
                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-check-circle-outline text-success mt-2 h3"></i>
                            <h4 className="fw-bold">
                                <span>{(totalchamadosfinalizados/totalchamados)*100}%</span>
                            </h4>
                            <p className="text-muted mb-0">Finalizado</p>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-progress-check text-warning mt-2 h3"></i>
                            <h4 className="fw-bold">
                                <span>{(totalchamadosemandamento/totalchamados)*100}%</span>
                            </h4>
                            <p className="text-muted mb-0"> Em andamento</p>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="my-2 my-sm-0">
                            <i className="mdi mdi-progress-clock text-danger mt-2 h3"></i>
                            <h4 className="fw-bold">
                                <span>{(totalchamadosaberto/totalchamados)*100}%</span>
                            </h4>
                            <p className="text-muted mb-0"> Em aberto</p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Status;
