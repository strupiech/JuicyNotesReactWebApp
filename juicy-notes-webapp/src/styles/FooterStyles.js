import styled from 'styled-components/macro';

export const FooterWrapper = styled.div`
    height: 125px;
    width: 100%;
    background-color: #ffec9d;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    height: ${props => props.height};
`;

export const FooterContentWrapper = styled.div`
    width: 1600px;
    height: 100%;
    display: flex;
    align-items: center;

    & > Img:last-of-type {
        margin-left: auto;
    }
`;