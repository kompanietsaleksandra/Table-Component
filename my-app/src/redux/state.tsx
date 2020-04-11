import React from 'react';

interface Result {
    resultCount: number
    resultTitle: string
}

interface Budget {
    budgetCount: number
    budgetPeriod: string
}

interface Duration {
    startDate: string
    endDate: string
    days: number
}

interface Table {
    campaignName: string;
    status: string;
    results: Array<Result>;
    impression: number;
    budget: Array<Budget>
    duration: Array<Duration>;
    amountSpent: number
}
interface TableArray extends Array<Table>{}


const data: TableArray = [
    {
        campaignName: 'Campaign1',
        status: 'Active',
        results: [
            {
                resultCount: 1,
                resultTitle: 'test title'
            }
        ],
        impression: 666,
        budget: [
            {
                budgetCount: 30,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 11 2016',
                endDate: '9 12 2016',
                days: 30
            }
        ],
        amountSpent: 20
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },{
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },{
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },{
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
];

export default data;