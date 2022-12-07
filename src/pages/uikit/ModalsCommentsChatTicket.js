// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormInput } from '../../components';
import Select from 'react-select';
import { getcomments } from '../../helpers';
import { useAsync } from "react-async";
import {comment} from "../apps/Chat/data"

// components
//import PageTitle from '../../components/PageTitle';

// images
//import logodark from '../../assets/images/logo-dark.png';

const ModalWithColoredHeader = ({comments}) => {
    console.log(comments)

    const [modal, setModal] = useState(false);
    const [headerClassName, setHeaderClassName] = useState('');

    /**
     * Show/hide the modal
     */
    const toggle = () => {
        setModal(!modal);
    };

    /**
     * Opens modal with custom header
     */
    const openModalWithHeaderClass = (className) => {
        setHeaderClassName(className);
        toggle();
    };
    
    /*const { data, error, isPending } = useAsync({ promiseFn: comment(requestid) });
    if (isPending) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data ) {*/

    return (
        <>
                    <Button className="btn-sm mt-1 me-2 text-end" variant="secondary" onClick={() => openModalWithHeaderClass('primary')}>
                        <i className="uil-comment-exclamation me-1"></i>Ver comentários
                    </Button>

                    <Modal show={modal} onHide={toggle}> 
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-colored-header', 'bg-' + headerClassName)}>
                            <h4 className="modal-title text-light">Comentários</h4>
                        </Modal.Header>
                        <Modal.Body>
                        <Row className="justify-content-center">
                         <Col>
                    <div className="timeline">
                        

                        
                       {comments.map((comment, index) => { if (index%2 == 0) { return (

                            <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <p className="mt-0 mb-1 font-16">{comment.comment}</p>

                                
                                </div>
                            </div>
                        </div>  )} else { return (
                             <div className="timeline-lg-item">
                             <div className="timeline-desk">
                                 <div className="timeline-box">
                                     <span className="arrow"></span>
                                     <span className="timeline-icon">
                                         <i className="mdi mdi-adjust"></i>
                                     </span>
                                     <p className="mt-0 mb-1 font-16">{comment.comment}</p>
 
                                 </div>
                             </div>
                         </div>
                          )
                        }
                       })} 
                       

                        

                        
                    </div>
                </Col>
            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={toggle}>
                                Fechar
                            </Button>{' '}
                        </Modal.Footer>
                    </Modal>
        </>
    );
};

const ModalsComments = ({comments}): React$Element<React$FragmentType> => {
    return (
        <>
            {/*<PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/modals' },
                    { label: 'Modals', path: '/ui/modals', active: true },
                ]}
                title={'Modals'}
            />

            <Row>
                {/*<Col md={6}>
                    <ModalSizes />
        </Col>

                
                    <ModalsWithPages />
            </Row>

            <Row>
                <Col md={6}>
                    <ModalWithAlerts />
                </Col>

                <Col md={6}>
                    <ModalPositions />
                </Col>
            </Row>*/}

            
                    <ModalWithColoredHeader comments={comments}/>
                

            {/*<Row>
                <Col md={6}>
                    <MultipleModal />
                </Col>

                <Col md={6}>
                    <ToggleBetweenModals />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <StaticBackdropModal />
                </Col>
            </Row>*/}
        </>
    );

};


export default ModalsComments;
