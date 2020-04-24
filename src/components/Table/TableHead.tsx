import React from 'react';
import styled from 'styled-components';
import TableHeadRow from './TableHeadRow';

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
    columns: string[];
}

const TableHead: React.FC<Props> = ({columns}) => {
    return (
        <TableHeader>
          <TableHeadRow columns={columns}/>
        </TableHeader>
        );
};

export default TableHead;
