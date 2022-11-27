// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';

// components
import Table from '../../../components/Table';
import SearchByDate from './SearchByDate';
import { useAsync } from "react-async";


// dummy data
import { requests } from './Data'
import { CSVLink } from 'react-csv';

/* order column render */
const OrderColumn = ({ row }) => {
    return (
        <>
            <Link to="#" className="text-body fw-bold">
                {row.original.idRequests}
            </Link>
        </>
    );
};

/* orderdate column render */
const OrderDateColumn = ({ row }) => {
    return (
        <>
            {row.original.order_date} <small className="text-muted">{row.original.order_time}</small>
        </>
    );
};

/* payment column render 
const PaymentStatusColumn = ({ row }) => {
    return (
        <>
            <h5>
                <span
                    className={classNames('badge', {
                        'badge-success-lighten': row.original.payment_status === 'Paid',
                        'badge-danger-lighten': row.original.payment_status === 'Payment Failed',
                        'badge-info-lighten': row.original.payment_status === 'Unpaid',
                        'badge-warning-lighten': row.original.payment_status === 'Awaiting Authorization',
                    })}>
                    {row.original.payment_status === 'Paid' && <i className="mdi mdi-coin me-1"></i>}
                    {row.original.payment_status === 'Payment Failed' && <i className="mdi mdi-cancel me-1"></i>}
                    {row.original.payment_status === 'Unpaid' && <i className="mdi mdi-cash me-1"></i>}
                    {row.original.payment_status === 'Awaiting Authorization' && (
                        <i className="mdi mdi-timer-sand me-1"></i>
                    )}
                    {row.original.payment_status}
                </span>
            </h5>
        </>
    );
};*/
/* status column render */
const StatusColumn = ({ row }) => {
    return (
        <>
            <h5>
                <span
                    className={classNames('badge', {
                        'badge-success-lighten': row.original.status === 'Finalizado',
                        'badge-info-lighten': row.original.status === 'Em andamento',
                        'badge-warning-lighten': row.original.status === 'Em aberto',
                    })}>
                    {row.original.status}
                </span>
            </h5>
        </>
    );
};

/* action column render */
const ActionColumn = ({ row }) => {
    return (
        <>
            <Link to="../../apps/chatticket">
                <Button variant="primary" className="me-2 mb-1">
                    <i className="mdi mdi-eye"></i>
                </Button>
            </Link>
            {/*<Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-delete"></i>
    </Link>*/}
        </>
    );
};

// get all columns
const columns = [
    {
        Header: 'ID',
        accessor: 'idRequests',
        sort: true,
        Cell: OrderColumn,
    },

    {
        Header: 'Data',
        accessor: 'order_date',
        sort: true,
        Cell: OrderDateColumn,
    },

    {
        Header: 'Cliente',
        accessor: 'client',
        sort: false,
    },
    /*{
        Header: 'Payment Status',
        accessor: 'payment_status',
        sort: false,
        Cell: PaymentStatusColumn,
    },*/
    {
        Header: 'Assunto',
        accessor: 'subject',
        sort: false,
    },
    {
        Header: 'Status',
        accessor: 'status',
        sort: false,
        Cell: StatusColumn,
    },
    {
        Header: 'Ação',
        accessor: 'action',
        sort: false,
        classes: 'table-action',
        Cell: ActionColumn,
    },
];

// get pagelist to display
const sizePerPageList = [
    {
        text: '10',
        value: 10,
    },
    {
        text: '20',
        value: 20,
    },
    {
        text: '50',
        value: 50,
    },
];

// main component
const Tickets = (): React$Element<React$FragmentType> => {
    const [requestList, setResquestList] = useState(requests);
    const { data, error, isPending } = useAsync({ promiseFn: requests });

    /* change order status group
    const changeRequestStatusGroup = (RequestStatusGroup) => {
        let updatedData = requests;
        //  filter
        updatedData =
        RequestStatusGroup === 'Todos'
                ? requests
                : [...requests].filter((o) => o.status?.includes(RequestStatusGroup));
        setResquestList(updatedData);
    };*/
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        const toexport = [];
        data.forEach(request => {
            toexport.push(
                {
                    id: request.idRequests, date: request.createdAt, client: request.client, subject: request.subject, status: request.status
                }
            )
        })
        return (
            <>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                            <Row>
                            <Col>
                            <SearchByDate />
                            </Col>

                    <Col>
                        <div className="text-sm-end">
                            <Button variant="light" className="mb-2" >
                            <CSVLink data={toexport} filename="Chamados">
                                Exportar</CSVLink>
                            </Button>
                        </div>
                    </Col>
                    </Row>
                                
                               {/*} <Row className="mb-2">
                                    <Col xl={8}>
                                        <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center w-auto">
                                                    <label htmlFor="status-select" className="me-2">
                                                        Status
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="status-select"
                                                        onChange={(e) => changeRequestStatusGroup(e.target.value)}>
                                                        <option value="Todos">Todos</option>
                                                        <option value="Em andamento">Em andamento</option>
                                                        <option value="Em aberto">Em aberto</option>
                                                        <option value="Finalizado">Finalizado</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
        </Row>*/}

                                <Table
                                    columns={columns}
                                    data={data}
                                    pageSize={10}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                    isSelectable={true}
                                    isSearchable={true}
                                    theadClass="table-light"
                                    searchBoxClass="mb-2"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
};

export default Tickets;
