import React from 'react';
import styled from 'styled-components';
import TableHeadRow from './TableHeadRow';

const TableHeader = styled.thead`
    th{
    padding: 30px;
    text-align: left;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    }
    :after{
    z-index: 999;
    content: "";
    background: black;
    position: absolute;
    width: calc(100% - 36px);
    height: 2px;
    left: 9px;
    top: 88px;
    }
`;

interface Props {
    dataHead: string[];
}

const TableHead: React.FC<Props> = ({dataHead}) => {
    return (
        <TableHeader>
          <TableHeadRow dataHead={dataHead}/>
        </TableHeader>
        );
};

export default TableHead;
