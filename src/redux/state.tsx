import {TableArray} from "./interface";
import _ from "lodash";

const data: TableArray = [];

for (let i = 0; i < 10; i++ ) {
    data.push({
        campaignName: 'Campaign',
        status: Math.random() >= 0.5,
        results: _.random(0, 35000),
        impression: _.random(0, 666666),
        budget: _.random(0, 100),
        duration:
            {
                startDate: new Date(`2016-${_.random(1, 12)}-${_.random(1, 31)}`),
                endDate: new Date(`2017-${_.random(1, 12)}-${_.random(1, 31)}`),

            },
        amountSpent: _.random(0, 100)
    });
}


export default data;