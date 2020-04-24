import React from 'react';
import styled from 'styled-components';

export const TableHeaderRowStyle = styled.div`
    display: contents;
`;

interface Props {
    columns: string[];
}

const TableHeadRow: React.FC<Props> = ({columns}) => {
    const tableColumn = columns.map((el: any) =>
        <th key={el}>
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
