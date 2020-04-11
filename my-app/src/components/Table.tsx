import React from 'react';
import './Table.css';

interface Props {
    data: any;
}

const Table: React.FC<Props> = ({data}) => {
    const tableElements = data.map((el: any) =>
        <div className="table-column">
            <div>{el.campaignName}</div>
            <div className="active-wrapper">
                <div className="active"></div>
                {el.status}
            </div>
            <div>{el.results[0].resultCount}
                <div>{el.results[0].resultTitle}</div>
            </div>
            <div>{el.impression}</div>
            <div>{el.budget[0].budgetCount}
                <div> {el.budget[0].budgetPeriod}</div>
            </div>
            <div>
                <div>{el.duration[0].startDate}-{el.duration[0].endDate}</div>
                <div>{el.duration[0].days} days</div>
            </div>
            <div>{el.amountSpent}</div>

        </div>
    );

    return (
        <div className="table-wrapper">
            <div className="table">
                <div>Campaign Name</div>
                <div>Status</div>
                <div>Results</div>
                <div>Impression</div>
                <div>Budget</div>
                <div>Duration</div>
                <div>Amount Spent</div>
            </div>
            <div>
                {tableElements}
            </div>
        </div>
    );
};

export default Table;