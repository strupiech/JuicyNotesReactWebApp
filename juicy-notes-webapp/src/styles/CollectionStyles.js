import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    width: 1600px;
    background-color: white;
    height: 100%;
`;

export const TitleWrapper = styled.div`
    background-color: pink;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const SpaceTaker = styled.div`
    width: 100px;
`;

export const Title = styled.p`
    font-size: 50px;
`;

export const SortSelector = styled.select`
    width: 100px;
`;

export const CollectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: 15% 30% 10% 30% 15%;
    grid-auto-rows: auto;
    background-color: green;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const CollectionNote = styled.div`
    background-color: red;
    grid-column-start: 2;
    grid-column-end: 5;
    margin: 5px 0;
    height: 50px;
`;

export const CollectionFlashcard = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    display: grid;
    grid-template-columns: 45% 10% 45%;
    margin: 5px 0;
`;

export const Face = styled.div`
    background-color: red;
    grid-column-start: 1;
    height: 50px;
`;

export const Reverse = styled.div`
    background-color: red;
    grid-column-start: 3;
    height: 50px;
`;