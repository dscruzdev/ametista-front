// @flow
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

// components
import HyperDatepicker from '../../../components/Datepicker';



const SearchByDate = ({eDate}): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    /*
     * handle date change*/
    
    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
            eDate(date);
        }
    }; 
    return (
        <>
           
                   
                     
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
                        
                   
                
        </>
    );
};

export default SearchByDate;
