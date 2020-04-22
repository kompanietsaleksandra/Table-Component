import React from "react";
import styled from "styled-components";

export const TableHeaderRowStyle = styled.div`
    display: contents;
`;

interface Props {
    column: any;
}

const TableHeadRow: React.FC<Props> = ({column}) => {
    const tableColumn = column.map((el: any) =>
        <th>
            {el}
        </th>
    );
    return (
        <TableHeaderRowStyle>
            {tableColumn}
        </TableHeaderRowStyle>
    );
};

export default TableHeadRow;
