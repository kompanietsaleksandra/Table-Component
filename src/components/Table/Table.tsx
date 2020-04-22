import React from 'react';
import styled from 'styled-components';
import TableHead from "./TableHead";
import TableRow from "./TableRow";

interface Props {
    data: any;
}

const TableBody = styled.table`
    padding: 20px;
    width: 100%;
    border-collapse: collapse;
    font-size: 17px;
    font-weight: 500;
    text-align: left;
    td {
     border-bottom: 1px solid #9E9E9E;
     padding: 30px;
    }
`;

const TableWrapper = styled.div`
     max-height: 700px;
     overflow: auto;
     border: 3px solid rgba(107,89,86,0.39);
     border-radius: 10px;
     padding: 0;
     box-shadow: 5px 10px 8px #888888;
`;

const Table: React.FC<Props> = ({data}) => {
    const tableElements = data.map((el: any) =>
        <tr>
            <TableRow el={el} data={data}/>
        </tr>
    );

    return (
        <TableWrapper>
            <TableBody>
                <TableHead column={["Campaign Name", "Status", "Results", "Impression", "Budget", "Duration", "Amount Spent"]}/>
                {tableElements}
            </TableBody>
        </TableWrapper>
    );
};

export default Table;