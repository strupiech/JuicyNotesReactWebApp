import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    width: 1600px;
    height: 100%;
    display: flex;
    justify-content: center;
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
    max-width: 100%;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns:     
        [full-start] minmax(1em, 47.5%) 
        [main-start] minmax(0, 15%) [main-end]
        minmax(1em, 47.5%) [full-end];;
    grid-auto-rows: 75px;
    grid-gap: 5px;
    padding-bottom: 50px;
    padding-top: 50px;
`;

export const CollectionItem = styled.div`
    background-color: ${props => props.background};
    grid-column-start: ${props => props.columnStart};
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowEnd};
    margin-right: ${props => props.direction === "right" ? "35px" : "0px"};
    margin-left: ${props => props.direction === "left" ? "35px" : "0px"};
    border-left: ${props => props.direction === "left" ? "5px solid " + props.borderColor : "none"};
    border-right: ${props => props.direction === "right" ? "5px solid " + props.borderColor : "none"};
`;

export const CollectionPin = styled.div`
    background-color: ${props => props.background};
    grid-column-start: 2;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        left: ${props => props.direction === "right" ? "-30px" : "auto"};
        right: ${props => props.direction === "left" ? "-30px" : "0px"};
        bottom: 0;
        width: 0;
        height: 0;
        border-right: ${props => props.direction === "right" ? "30px solid " + props.background : "none"};
        border-left: ${props => props.direction === "left" ? "30px solid " + props.background : "none"};
        border-top: 37.5px solid transparent;
        border-bottom: 37.5px solid transparent;
    }
`;
