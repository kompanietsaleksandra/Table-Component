
interface Result {
    resultCount: number
    resultTitle: string
}

interface Budget {
    budgetCount: number
    budgetPeriod: string
}

interface Duration {
    startDate: any
    endDate: any
    days: number
}

interface CampaignData {
    campaignName: string;
    status: string;
    results: Result;
    impression: number;
    budget: Budget;
    duration: Duration;
    amountSpent: number
}
interface TableArray extends Array<CampaignData>{}


const data: TableArray = [
    {
        campaignName: 'Campaign1',
        status: 'Active',
        results:
            {
                resultCount: 348777,
                resultTitle: 'test title'
            },
        impression: 666,
        budget:
            {
                budgetCount: 30,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: new Date('2016-02-02'),
                endDate: new Date('2016-03-02'),
                days: 30
            },
        amountSpent: 20
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 359756,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 398775,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 388885,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },{
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 388885,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 359999,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },{
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 356578,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 358543,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },{
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 398765,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results:
            {
                resultCount: 387655,
                resultTitle: 'test title'
            },
        impression: 676,
        budget:
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            },
        duration:
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            },
        amountSpent: 220
    },
];

export default data;