import {TableArray} from './types';
import _ from 'lodash';

export const data: TableArray = [];

const campaignNameArr = [
  'Campaign1',
  'Campaign2',
  'Campaign3',
  'Campaign4',
  'Campaign5',
  'Campaign6',
];

function getRandomName(arr: string[]) {
    return arr[_.random(0, arr.length - 1)];
}

for (let i = 0; i < 10; i++ ) {
    data.push({
        campaignName: getRandomName(campaignNameArr),
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


// export default data;
