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
import { orders, requests } from './Data'

/* order column render */
const OrderColumn = ({ row }) => {
    return (
        <>
            <Link to="#" className="text-body fw-bold">
                {row.original.id}
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
                        'badge-success-lighten': row.original.ticket_status === 'Concluído',
                        'badge-danger-lighten': row.original.ticket_status === 'Cancelado',
                        'badge-info-lighten': row.original.ticket_status === 'Em andamento',
                        'badge-warning-lighten': row.original.ticket_status === 'Em espera',
                    })}>
                    {row.original.ticket_status}
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
        accessor: 'id',
        sort: true,
        Cell: OrderColumn,
    },
    {
        Header: 'Data',
        accessor: 'ticket_date',
        sort: false,
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
        accessor: 'ticket_status',
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
    const [orderList, setOrderList] = useState(orders);
    const { data, error, isPending } = useAsync({ promiseFn: requests });

    // change order status group
    const changeOrderStatusGroup = (OrderStatusGroup) => {
        let updatedData = orders;
        //  filter
        updatedData =
            OrderStatusGroup === 'Todos'
                ? orders
                : [...orders].filter((o) => o.ticket_status?.includes(OrderStatusGroup));
        setOrderList(updatedData);
    };
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        return (
            <>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <SearchByDate />
                                <Row className="mb-2">
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
                                                        onChange={(e) => changeOrderStatusGroup(e.target.value)}>
                                                        <option value="Todos">Todos</option>
                                                        <option value="Cancelado">Cancelado</option>
                                                        <option value="Em espera">Em espera</option>
                                                        <option value="Em andamento">Em andamento</option>
                                                        <option value="Concluído">Concluído</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>

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
