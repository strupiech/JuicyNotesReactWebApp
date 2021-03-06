import styled from 'styled-components/macro';

export const FullContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`;

export const WrapperItem = styled.div`
    display: flex;
    justify-content: center;
`;

export const WelcomeWrapper = styled.div`
    width: 1600px;
    display: flex;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 70px;
`;

export const Title = styled.div`
    width: 654px;
    margin-top: auto;
    color: #FDBB45;
    overflow: hidden;
    text-align: right;
    line-height: 30px;
`;

export const Video = styled.div`
    background-image: url('https://i.imgur.com/leaRcnO.gif');
    background-size: cover;
    width: 654px;
    height: 410px;
    background-position: -110px;
    /* border: 7px solid #ffec9d; */
`;