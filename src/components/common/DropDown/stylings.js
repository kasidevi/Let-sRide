import styled from '@emotion/styled';

const Div = styled.div `
   width: 100px;
   padding: 5px;
   cursor: default;
   position: absolute;
   margin-top: 50px;
   border: 1px solid grey;
   border-radius: 4px;
   background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
`;
const List = styled.li `
   cursor: default;
   color:grey;
   &:hover {
        background-color: #e2e8f0;
        color:black;
        padding:2px;
        border-radius:2px;
      }
`;
const OrderedList = styled.ul `
   cursor: default;
`;

export { Div, List, OrderedList };
