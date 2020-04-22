import React from "react";
import styled from "styled-components";
import TableHeadRow from "./TableHeadRow";

const TableHeader = styled.tr`
    th{
    border-bottom: 3px solid #282c34;
    padding: 30px;
    text-align: left;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    }
`;

interface Props {
    column: any;
}

const TableHead: React.FC<Props> = () => {
    return (
        <TableHeader>
          <TableHeadRow column={["Campaign Name", "Status", "Results", "Impression", "Budget", "Duration", "Amount Spent"]}/>
        </TableHeader>
        );
};

export default TableHead;
