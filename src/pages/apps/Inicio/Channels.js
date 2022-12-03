// @flow
import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Channels = (): React$Element<any> => {
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
                            <td>15</td>
                            <td>
                                <ProgressBar now={65} style={{ height: '3px' }} variant="success"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Instagram Direct</td>
                            <td>10</td>
                            <td>
                                <ProgressBar now={45} style={{ height: '3px' }}  />
                            </td>
                        </tr>
                        <tr>
                            <td>Facebook Messenger</td>
                            <td>3</td>
                            <td>
                                <ProgressBar now={30} style={{ height: '3px' }} variant="info" />
                            </td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>2</td>
                            <td>
                                <ProgressBar now={25} style={{ height: '3px' }} variant="warning" />
                            </td>
                        </tr>
                        <tr>
                            <td>SMS</td>
                            <td>1</td>
                            <td>
                                <ProgressBar now={25} style={{ height: '3px' }} variant="danger" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Channels;
