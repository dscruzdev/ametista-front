// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';

// dummy data
import { users, clients } from './data';
import { useAsync } from "react-async";

type Users = {
    cpf: string,
    name: string,
    avatar: string,
    lastMessage: string,
    totalUnread?: number,
    lastMessageOn: string,
    email: string,
    phone: string,
    location: string,
    languages: string,
    status: string,
};

type ChatUsersProps = {
    onUserSelect: (value: Users) => void,
};

// ChatUsers
const ChatUsers = ({ onUserSelect }: ChatUsersProps): React$Element<React$FragmentType> => {
    const statusFilters = ['Todos', 'Em espera', 'Em andamento'];

    const { data, error, isPending } = useAsync({ promiseFn: clients });
    // const { dataSubject, errorSubject, isPendingSubject } = useAsync({ promiseFn: subjects });
    // const { dataLanguage, errorLanguage, isPendingLanguage } = useAsync({ promiseFn: languages });
    // const { dataRequest, errorRequest, isPendingRequest } = useAsync({ promiseFn: requests });
    // const { dataComments, errorComments, isPendingComments } = useAsync({ promiseFn: comments });
    
    //const [selectedUser, setSelectedUser] = useAsync(users[1]);

    const [user, setUser] = useState([...users]);
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [selectedstatus, setSelectedstatus] = useState('Todos');

    /**
     * Filter users
     */
    const filterUsers = (status) => {
        setSelectedstatus(status);
        setUser(
            status !== 'Todos'
                ? [...users].filter((u) => u.status.toLowerCase().indexOf(status.toLowerCase()) >= 0)
                : [...users]
        );
    };

    /**
     * Search the user
     * @param {*} text
     */
    const search = (text) => {
        setUser(text ? [...users].filter((u) => u.name.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...users]);
    };

    /**
     * Activates the user
     * @param {*} user
     */
    const activateUser = (user) => {
        setSelectedUser(user);
        if (onUserSelect) {
            onUserSelect(user);
        }
    };



    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data ) {
        console.log(data);
        return (
            <>
                <Card>
                    <Card.Body className="p-0">
                        <ul className="nav nav-tabs nav-bordered">
                            {statusFilters.map((status, index) => {
                                return (
                                    <li key={index} className="nav-item" onClick={() => filterUsers(status)}>
                                        <Link
                                            to="#"
                                            className={classnames('nav-link', 'py-2', {
                                                active: selectedstatus === status,
                                            })}>
                                            {status}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane show active">
                                <div className="app-search p-3">
                                    <div className="form-status position-relative">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            onKeyUp={(e) => search(e.target.value)}
                                        />
                                        <span className="mdi mdi-magnify search-icon"></span>
                                    </div>
                                </div>

                                <SimpleBar className="px-3" style={{ maxHeight: '550px', width: '100%' }}>
                                    {data.map((user, index) => {
                                        return (
                                            <Link
                                                to="#"
                                                key={index}
                                                className="text-body"
                                                onClick={(e) => {
                                                    activateUser(user);
                                                }}>
                                                <div
                                                    className={classnames('d-flex', 'align-items-start', 'mt-1', 'p-2', {
                                                        'bg-light': user.cpfClients === selectedUser.cpfClients,
                                                    })}>
                                                    <img
                                                        src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}
                                                        className="me-2 rounded-circle"
                                                        height="48"
                                                        alt=""
                                                    />

                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                            <span className="float-end text-muted font-12">
                                                                {/* {user.lastMessageOn} */}
                                                            </span>
                                                            {user.name}
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                            <span className="w-25 float-end text-end">
                                                                {user.totalUnread && (
                                                                    <span className="badge badge-danger-lighten">
                                                                        {/* {user.totalUnread} */}
                                                                    </span>
                                                                )}
                                                            </span>
                                                            {/* <span className="w-75">{user.lastMessage}</span> */}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </SimpleBar>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
    }
};

export default ChatUsers;
