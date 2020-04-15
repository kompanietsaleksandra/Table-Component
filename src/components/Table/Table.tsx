import React from 'react';
import './Table.css';
import styled from 'styled-components';
import TableHead from "./TableHead";
// import * as moment from 'moment';
// import moment from 'moment';

interface Props {
    data: any;
}

const TableWrapper = styled.table`
    padding: 20px;
    border: 2px solid;
    border-radius: 10px;
    width: 80%;
    border-collapse: collapse;
    font-size: 17px;
    font-weight: 500;
    td {
     border-bottom: 1px solid #9E9E9E;
     padding: 20px;
    }
`;

const Table: React.FC<Props> = ({data}) => {
    const tableElements = data.map((el: any) =>
        <tr>
            <td className="table-campaign">{el.campaignName}</td>
            <td className="active-wrapper">
                <div className="active">
                    {el.status}
                </div>
            </td>
            <td>{el.results.resultCount.toLocaleString()}
                <div className="table-sign">{el.results.resultTitle}</div>
            </td>
            <td>{el.impression}</td>
            <td>${el.budget.budgetCount}
                <div className="table-sign"> {el.budget.budgetPeriod}</div>
            </td>
            <td>
                {/*<div>{moment(el.duration.startDate)}-{moment(el.duration.endDate)}</div>*/}
                {/*<div>{moment(el.duration.startDate).diff(moment(el.duration.endDate),'days')} </div>*/}
            </td>
            <td>${el.amountSpent}</td>

        </tr>
    );

    return (
        <TableWrapper>
            <TableHead/>
                {tableElements}
        </TableWrapper>
    );
};

export default Table;