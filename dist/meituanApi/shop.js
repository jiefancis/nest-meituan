"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryShop = exports.createShop = void 0;
const axios_1 = require("axios");
const meituanApi_1 = require("../constants/meituanApi");
const sign_1 = require("../utils/sign");
const qs = require("qs");
const createShop = async (params, { appSecret, appKey }) => {
    try {
        let param = {
            shop_id: '40002',
            shop_name: '咸鱼外卖',
            category: 110,
            second_category: 110002,
            contact_name: '咸鱼梦想家',
            contact_phone: '13626753870',
            contact_email: 'dev@guomingju.com',
            shop_address: '果茗星外卖店 - 绍兴菓茗聚餐饮管理有限公司',
            shop_address_detail: '果茗星外卖店8号铺',
            shop_lng: 116299545,
            shop_lat: 39922477,
            coordinate_type: 0,
            delivery_service_codes: '4011,4012',
            business_hours: JSON.stringify([
                { beginTime: '00:00', endTime: '23:59' },
            ]),
            version: '1.0',
            timestamp: Math.floor(Date.now() / 1000),
            appkey: appKey,
        };
        const sign = (0, sign_1.generateSign)(param, appSecret);
        param.sign = sign;
        const res = await axios_1.default.post(meituanApi_1.PEISONTAPI.shopCreate, qs.stringify(param), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return res;
    }
    catch (error) {
        console.log('catch--error', error);
    }
};
exports.createShop = createShop;
const queryShop = async (shopId, { appSecret, appKey }) => {
    try {
        let data = {
            shop_id: shopId || 'test_0001',
            version: '1.0',
            timestamp: Math.floor(Date.now() / 1000),
            appkey: appKey,
        };
        const sign = (0, sign_1.generateSign)(data, appSecret);
        data.sign = sign;
        const res = await axios_1.default.post(meituanApi_1.PEISONTAPI.shopQuery, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return res;
    }
    catch (error) {
        console.log('catch--error', error);
    }
};
exports.queryShop = queryShop;
//# sourceMappingURL=shop.js.map