import React from 'react';
import styled from 'styled-components';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { TableArray } from "../../redux/types";

const TableBody = styled.tbody`
    width: 100%;
    border-collapse: collapse;
    font-size: 17px;
    font-weight: 500;
    text-align: left;
    td {s
     border-bottom: 1px solid #9E9E9E;
     padding: 30px;
    }
`;

const TableWrapper = styled.table`
     width: 100%;
     border: 3px solid rgba(107,89,86,0.39);
     border-radius: 10px;
     padding: 0;
     box-shadow: 5px 10px 8px rgba(107,89,86,0.49);
`;

interface State {
    dataArr: TableArray
}

class Table extends React.Component<any, State> {
    render() {
        const { data } = this.props;
        console.log('--------------');
        console.log(data);
        console.log('______________');
        const tableElements = data.map((el: any) =>
            <tr key={el.id}>
                <TableRow el={el}  />
            </tr>
        );
        return (
            <TableWrapper>
                <TableHead columns={["Campaign Name", "Status", "Results", "Impression", "Budget", "Duration", "Amount Spent"]}/>
                <TableBody>
                    {tableElements}
                </TableBody>
            </TableWrapper>
        );
    }
}

export default Table;