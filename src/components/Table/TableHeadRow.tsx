import React from "react";
import styled from "styled-components";

export const TableHeaderRowStyle = styled.div`
    display: contents;
`;
const TableHeadRow = () => {
    return (
        <TableHeaderRowStyle>
            <th>Campaign Name</th>
            <th>Status</th>
            <th>Results</th>
            <th>Impression</th>
            <th>Budget</th>
            <th>Duration</th>
            <th>Amount Spent</th>
        </TableHeaderRowStyle>
    );
};

export default TableHeadRow;
