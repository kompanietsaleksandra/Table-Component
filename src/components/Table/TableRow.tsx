import React from 'react';
import styled from 'styled-components';
import {TableHeaderRowStyle} from './TableHeadRow';
import {CampaignData} from '../../redux/types';
import moment from 'moment';
import _ from 'lodash';

interface Props {
    data: CampaignData;
    el: any;
}
const TableRowStyle = styled(TableHeaderRowStyle)`
     line-height: 24px
`;
const TableCampaign = styled.td`
     font-weight: bold;
`;
const TableActive = styled.div<{ status: boolean }>`
      padding-left: 20px;
      position: relative;
      display: inline;
       :before {
         content: '';
         width: 10px;
         height: 10px;
         background: ${props => props.status ? 'green' : 'red'};
         border-radius: 50px;
         margin: 6px 4px;
         position: absolute;
         left: 0px;
         top: 0;
        }
`;
const TableSign = styled.div`
         font-size: 16px;
         color: #333333;
         opacity: 0.7;
`;
const TableRow: React.FC<Props> = ({el}) => {
    return (
        <TableRowStyle>
            <TableCampaign>{el.campaignName}</TableCampaign>
            <td>
                <TableActive status={el.status}>
                    {el.status ? 'Active' : 'Disable'}
                </TableActive>
            </td>
            <td>{el.results.toLocaleString()}
                <TableSign>Clicks</TableSign>
            </td>
            <td>{el.impression.toLocaleString()}</td>
            <td>${el.budget}
                <TableSign>Day</TableSign>
            </td>
            <td>
                <div>{moment(el.duration.startDate).format('MMM DD, YYYY ')}
                -{moment(el.duration.endDate).add(_.random(0, 1000), 'days').format('MMM DD, YYYY ')}</div>
                <TableSign>{moment(el.duration.endDate).add(_.random(0, 1000), 'days').diff(moment(el.duration.startDate),'days')} days </TableSign>
            </td>
            <td>${el.amountSpent}</td>
        </TableRowStyle>
    );
};

export default TableRow;