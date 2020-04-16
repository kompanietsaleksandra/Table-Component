import React from "react";
import styled from "styled-components";
import TableHeadRow from "./TableHeadRow";


const TableHeader = styled.tr`
    th{
    border-bottom: 3px solid #282c34;
    padding: 30px;
    text-align: left;
    }
`;
const TableHead = () => {
    return (
        <TableHeader>
          <TableHeadRow/>
        </TableHeader>
        );
};

export default TableHead;
