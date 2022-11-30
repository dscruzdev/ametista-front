// @flow
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

// components
import HyperDatepicker from '../../../components/Datepicker';



const SearchByDate = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    /*
     * handle date change*/
    
    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
        }
    }; 
    return (
        <>
            <Row>
                <Col xl={8}>
                    <div className="page-title-box">
                        <div>
                            <form className="d-flex">
                                <div className="input-group">
                                 <HyperDatepicker
                                        value={selectedDate}
                                        inputClass="form-control-light"
                                        onChange={(date) => {
                                            onDateChange(date);
                                        }}
                                    />
                                    </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SearchByDate;
