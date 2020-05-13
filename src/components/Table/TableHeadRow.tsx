import React from 'react';

interface Props {
    dataHead: string[];
}

const TableHeadRow: React.FC<Props> = ({dataHead}) => {
    const tableColumn = dataHead.map((el: any) =>
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
