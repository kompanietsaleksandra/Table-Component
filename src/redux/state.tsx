import { TableArray } from './types';
import _ from 'lodash';

const data: TableArray = [];

for (let i = 0; i < 10; i++ ) {
    data.push({
        id: i,
        campaignName: `Campaign ${[i]}`,
        status: !!_.random(0, 1),
        results: _.random(0, 35000),
        impression: _.random(0, 666666),
        budget: _.random(0, 100),
        duration:
            {
                startDate: new Date(`2016-05-05`),
                endDate: new Date(`2016-05-05`),
            },
        amountSpent: _.random(0, 100)
    });
}

export const dataHead: string[] = [
    "Campaign Name", "Status", "Results", "Impression", "Budget", "Duration", "Amount Spent"
];



export function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(data);
            reject(new Error('Error'));
        }, 1000);
    });
}

