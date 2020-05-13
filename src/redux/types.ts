
export interface Duration {
    startDate: any
    endDate: any
}

export interface CampaignData {
    id: number;
    campaignName: string | number;
    status: boolean;
    results: number;
    impression: number;
    budget: number;
    duration: Duration;
    amountSpent: number
}

export interface TableArray extends Array<CampaignData>{}
