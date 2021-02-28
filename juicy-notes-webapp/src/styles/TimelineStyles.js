import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    width: 1600px;
    height: 100%;
`;

export const TitleWrapper = styled.div`
    background-color: #fffcd5;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Title = styled.p`
    width: 357px;
    height: 52px;
    font-size: 45px;
    font-weight: 900;
    text-align: center;
    color: #22635e;
`;

export const CollectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: 15% 30% 10% 30% 15%;
    grid-auto-rows: auto;
    padding-bottom: 50px;
`;

export const CollectionFlashcard = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    display: grid;
    grid-template-columns: 45% 10% 45%;
    margin: 5px 0;
`;

export const Face = styled.div`
    background-color: #D55B55;
    grid-column-start: 1;
    height: 80px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffcd5;

`;

export const Reverse = styled.div`
    background-color: #D55B55;
    grid-column-start: 3;
    height: 80px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffcd5;

`;

export const Bin = styled.img`
    grid-column-start: 2;
    height: 50px;
    border-radius: 15px;
    margin-left: 50%;
`;

export const Juice = styled.img`
    grid-column-start: 2;
    height: 80px;
    margin: 0 auto;
`;