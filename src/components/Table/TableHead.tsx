import React from "react";
import styled from "styled-components";

const TableHeader = styled.tr`
    th{
    border-bottom: 4px solid #282c34;
    padding: 30px;
    }
`;
const TableHead = () => {
    return (
        <TableHeader>
            <th>Campaign Name</th>
            <th>Status</th>
            <th>Results</th>
            <th>Impression</th>
            <th>Budget</th>
            <th>Duration</th>
            <th>Amount Spent</th>
        </TableHeader>
        );
};

export default TableHead;
