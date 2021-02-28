import React from 'react';
import LoginForm from '../components/LoginForm';
import { WelcomeWrapper, WrapperItem } from '../styles/JumbotronStyles';

function LoginPage(props) {
    return (
        <>
            <WelcomeWrapper>
                <WrapperItem>
                    <LoginForm toggle={props.toggle} />
                </WrapperItem>
            </WelcomeWrapper>
        </>
    );
}

export default LoginPage;