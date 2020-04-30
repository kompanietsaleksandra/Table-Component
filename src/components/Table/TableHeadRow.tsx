import React from 'react';

interface Props {
    columns: string[];
}

const TableHeadRow: React.FC<Props> = ({columns}) => {
    const tableColumn = columns.map((el: any) =>
        <th key={el.toString()}>
            {el}
        </th>
    );
    return (
        <tr>
            {tableColumn}
        </tr>
    );
};

export default TableHeadRow;
