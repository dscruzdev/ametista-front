// @flow
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';

//actions
import { logoutUser } from '../../redux/actions';

// components
import AccountLayout from '../account/AccountLayout';

// images
import logoutIcon from '../../assets/images/logout-icon.svg';

/* bottom link */

const Agradecimento = (): React$Element<any> | React$Element<React$FragmentType> => {

    return (
        <>
            <AccountLayout>
                <div className="text-center w-90 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold mb-3">Agradecemos seu feedback! </h4>
                    <i class="uil-smile-beam display-4"></i>
        
                </div>
            </AccountLayout>
        </>
    );
};

export default Agradecimento;
