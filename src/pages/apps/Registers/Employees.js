// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Chart from 'react-apexcharts';


// components
//import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';
import Modals from '../../uikit/Modals';

// dummy data
import { employees } from './Data';
import { useAsync } from "react-async";
import ModalsEmployeesAction from '../../uikit/ModalsEmployeesAction';
import { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { useReducer } from 'react';

/* name column render */
const NameColumn = ({ row }) => {
    return (
        <>
            <div className="table-user">
                <Link to="#" className="text-body fw-semibold">
                    {row.original.name}
                </Link>
            </div>
        </>
    );
};

/* action column render */
const ActionColumn = ({ row }) => {
    return (
        <>
            <ModalsEmployeesAction data={row}/>
        </>
    );
};

const EmployeeDateColumn = ({ row }) => {
    return (
        <>
            {row.original.order_date} <small className="text-muted">{row.original.order_time}</small>
        </>
    );
};

/*function ExportExcel() {
    const [userdata, setUserdata]= useState([]);

    useEffect( () => {
        const getuserdata = async () => {
            const userreq = await fetch();
        }
    getuserdata();
    },[]);
}*/
// get all columns
const columns = [
    {
        Header: 'Funcionário',
        accessor: 'name',
        sort: true,
        Cell: NameColumn,
        classes: 'table-user',
    },
    {
        Header: 'CPF',
        accessor: 'cpfUsers',
        sort: true,
    },
    {
        Header: 'E-mail',
        accessor: 'email',
        sort: true,
    },

    {
        Header: 'Área',
        accessor: 'area',
        sort: false,
    },
   /* {
        Header: 'Wallet Balance',
        accessor: 'balance',
        sort: true,
    },*/
    {
        Header: 'Data de cadastro',
        //accessor: 'createddate_on',
        Cell: EmployeeDateColumn,
        sort: true,
    },
   
    /*{
        Header: 'Revenue',
        accessor: 'revenue',
        Cell: RevenueColumn,
        sort: false,
    },*/
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
        text: '25',
        value: 25,
    },
    {
        text: '50',
        value: 50,
    },
];


// main component
const Employees = (): React$Element<React$FragmentType> => {
    const { data, error, isPending } = useAsync({ promiseFn: employees });
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        const toexport = [];
        data.forEach(user => {
            toexport.push(
                {
                    name: user.name, cpf: user.cpfUsers, email: user.email, date: user.createdAt, area: user.area
                }
            )
        })
    return (
        <>
        <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Funcionários</h4>
                    </div>
                </Col>
            </Row>
           {/*} <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/sellers' },
                    { label: 'Sellers', path: '/apps/ecommerce/sellers', active: true },
                ]}
                title={'Sellers'}
            />*/}
            
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                           
                            <Row>
                            <Col>
                            <Modals />
                            </Col>

                    <Col>
                        <div className="text-sm-end">
                            <Button variant="light" className="mb-2" >
                            <CSVLink data={toexport} filename="Funcionarios">
                                Exportar</CSVLink>
                            </Button>
                        </div>
                    </Col>
                </Row>
                                 {/*<Col sm={5}>
                                    <Button variant="primary" className="mb-2">
                                        <i className="mdi mdi-plus-circle me-2"></i> Cadastrar funcionário
                                    </Button>
                                </Col>

                                <Col sm={7}>
                                    <div className="text-sm-end">
                                       <Button variant="primary" className="mb-2 me-1">
                                            <i className="mdi mdi-cog"></i>
                                         </Button>

                                        <Button variant="light" className="mb-2 me-1">
                                            Import
                                        </Button>

                                        <Button variant="light" className="mb-2 me-1">
                                            Exportar
                                        </Button>
                                    </div>
                                </Col>*/}
                            
                            <Table
                                columns={columns}
                                data={data}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={false}
                                isSearchable={true}
                                tableClass="table-striped"
                                theadClass="table-light"
                                searchBoxClass="mt-2 mb-3"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
}
export default Employees;
