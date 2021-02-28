import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavbarWrapper, Element } from '../styles/NavbarStyles';

export default function Navbar(props) {

    let history = useHistory();

    const handleClickHome = () => {
        history.push("/timeline");
    }

    const show = () => {
        console.log(props.isUserAuthenticated);
        return (
            props.isUserAuthenticated || (<NavbarWrapper>
                <Element onClick={() => handleClickHome()}>Home</Element>
            </NavbarWrapper>)
        );
    }

    return (
        show()
    );
}