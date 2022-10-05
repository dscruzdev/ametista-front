// @flow
import React, { useEffect } from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { resetAuth, loginUser } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components/';

import AccountLayout from './AccountLayout';

/* bottom link of account pages */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                
            </Col>
        </Row>
    );
};

const Login = (): React$Element<any> => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const location = useLocation();
    const redirectUrl = location.state && location.state.from ? location.state.from.pathname : '/';

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, userLoggedIn, user, error } = useSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required(t('Por favor, digite seu e-mail.')),
            password: yup.string().required(t('Por favor, digite sua senha.')),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData) => {
        dispatch(loginUser(formData['username'], formData['password']));
    };

    return (
        <>
            {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}

            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('Entrar')}</h4>
                    <p className="text-muted mb-4">
                        {t('Digite seu e-mail e senha para acessar o sistema.')}
                    </p>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ username: '', password: '' }}>
                    <FormInput
                        label={t('Email')}
                        type="text"
                        name="username"
                        placeholder={t('Digite seu e-mail')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Senha')}
                        type="password"
                        name="password"
                        placeholder={t('Digite sua senha')}
                        containerClass={'mb-3'}>
                        <Link to="/account/forget-password" className="text-muted float-end">
                            <small>{t('Esqueceu sua senha?')}</small>
                        </Link>
                    </FormInput>

                    <div className="mb-3 mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('Entrar')}
                        </Button>
                    </div>
                </VerticalForm>
            </AccountLayout>
        </>
    );
};

export default Login;
