import React from 'react';
import styled from 'styled-components';
import TableHead from './TableHead';
import TableRow from './TableRow';

const TableBody = styled.tbody`
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

const TableWrapper = styled.table`
     width: 100%;
     border: 3px solid rgba(107,89,86,0.39);
     border-radius: 10px;
     border-collapse: collapse;
     padding: 0;
     box-shadow: 5px 10px 8px rgba(107,89,86,0.49);
`;

class Table extends React.Component<any, any> {
    constructor(props: []) {
        super(props);
        this.state = {
            dataArr: []
        };
    }
    componentWillMount() {
        let promise = this.props;
        promise.data.then(
            (response: any) => this.setState({ dataArr: response}),
            (error: any) => alert(`Rejected: ${error}`)
        );

    }
    render() {
        let tableElements;
        if (this.state && this.state.dataArr.length !== 0){
            const data: any = this.state.dataArr;
            tableElements = data.map((el: []) =>
                <tr key={el.toString()}>
                    <TableRow el={el} data={data} />
                </tr>
            );
        } else {
            let data: any = [];
            tableElements = data.map((el: []) =>
                <tr key={el.toString()}>
                    <TableRow el={el} data={data} />
                </tr>
            );
        }

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