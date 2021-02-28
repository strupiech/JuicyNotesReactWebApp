import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    width: 1600px;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 20px;
    position: relative;
`;

export const CollectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px auto 500px;
  grid-template-rows: 300px auto 300px; 
  column-gap: 10px;
  row-gap: 15px;
`;

export const CollectionElement = styled.div`
    background-color: red;
    width: 500px;
    height: 300px;
`;

export const AddButton = styled.div`
    width: 100px;
    height: 100px;
    background-color: orange;
    position: absolute;
    right: 100px;
    top: 100px;
`;