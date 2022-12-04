// @flow
import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Channels = ({totalchamadosmessenger, totalchamadoswhatsapp, totalchamadossms, totalchamadosemail, totalchamados}): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                {/*<Link to="#" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
    </Link>*/}
                <h4 className="header-title  mt-2 mb-3">Chamados por canal</h4>

                <Table responsive className="table table-sm table-centered mb-2 font-14">
                    <thead className="table-light">
                        <tr>
                            <th>Canal</th>
                            <th>Chamados</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>WhatsApp</td>
                            <td>{(totalchamadoswhatsapp)}</td>
                            <td>
                                <ProgressBar now={(totalchamadoswhatsapp/totalchamados)*100} style={{ height: '3px' }} variant="success"/>
                            </td>
                        </tr>
                        {/*<tr>
                            <td>Instagram Direct</td>
                            <td>10</td>
                            <td>
                                <ProgressBar now={45} style={{ height: '3px' }}  />
                            </td>
                        </tr>*/}
                        <tr>
                            <td>Facebook Messenger</td>
                            <td>{(totalchamadosmessenger)}</td>
                            <td>
                                <ProgressBar now={(totalchamadosmessenger/totalchamados)*100} style={{ height: '3px' }} variant="info" />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>SMS</td>
                            <td>{(totalchamadossms)}</td>
                            <td>
                                <ProgressBar now={(totalchamadossms/totalchamados)*100} style={{ height: '3px' }} variant="danger" />
                            </td>
                        </tr>

                        <tr>
                            <td>E-mail</td>
                            <td>{(totalchamadosemail)}</td>
                            <td>
                                <ProgressBar now={(totalchamadosemail/totalchamados)*100} style={{ height: '3px' }} variant="warning" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Channels;
