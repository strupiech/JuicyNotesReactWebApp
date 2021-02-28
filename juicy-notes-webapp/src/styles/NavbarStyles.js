import styled from 'styled-components/macro';

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

export const Element = styled.div`
    margin-right: 10px;
    padding: 5px;

    &:last-of-type {
        margin-right: 0px;
    }

    &:hover {
        color: #d55b55;
    }
`;