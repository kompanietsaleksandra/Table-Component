import { TableArray } from './types';
import _ from 'lodash';


const dataBodyEng: TableArray = [];
const dataBodyRus: TableArray = [];

function createBodyMockData(dataArr: TableArray, locale: string) {
    for (let i = 0; i < 10; i++ ) {
        dataArr.push({
            id: i,
            campaignName: locale === 'eng'  ? `Campaign ${[i]}` : `Компания № ${[i]}`,
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
}
createBodyMockData(dataBodyEng, 'eng');
createBodyMockData(dataBodyRus, 'rus');

const dataHeadEng: string[] = [
    "Campaign Name", "Status", "Results", "Impression", "Budget", "Duration", "Amount Spent"
];
const dataHeadRus: string[] = [
    "Название кампании", "Статус", "Результаты", "Показы", "Бюджет", "Продолжительность", "Потраченная сумма"
];

const data = [
    {
        dataHead: dataHeadEng,
        dataBody: dataBodyEng
    },
    {
        dataHead: dataHeadRus,
        dataBody: dataBodyRus
    },
];

export function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(data);
            reject(new Error('Error'));
        }, 1000);
    });
}

