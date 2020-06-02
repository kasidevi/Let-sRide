import styled from '@emotion/styled';

const Div = styled.div `
    margin:20px;
`;
const Table = styled.table `
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    color:#7e858e;
    border-left: 1px solid #d7dfe9;
    border-top: 1px solid #d7dfe9;
    border-right: 1px solid #d7dfe9;
    `;
const TableHead = styled.thead `
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-grow:1;
    font-weight:600;
    font-siz:16px;
    padding-top:20px;
`;
const TableRow = styled.tr `
    display:flex;
    flex-grow:1;
`;
const TableData = styled.td `
    width:10%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    flex-grow:1;
    justify-content:center;
    align-items:center;
    border-bottom: 1px solid #d7dfe9;
`;
const TableBody = styled.tbody `
      width:100%;
      font-family: HKGrotesk;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: normal;
      display:flex;
      flex-direction:column;
      flex-wrap:wrap;
      flex-grow:1;
`;

export { Div, Table, TableHead, TableRow, TableData, TableBody };
