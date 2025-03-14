import axios from 'axios';
import { PEISONTAPI } from '@constants/meituanApi';

import { generateSign } from '@utils/sign';
import * as qs from 'qs';
import request from '@utils/request';

export const createShop = async (data) => {
  try {
    // let param: any = {
    //   shop_id: '40002',
    //   shop_name: '咸鱼外卖',
    //   category: 110, //'int 一级分类，相见分类品类说明',
    //   second_category: 110002, // 'int 二级分类，相见分类品类说明',
    //   contact_name: '咸鱼梦想家',
    //   contact_phone: '13626753870',
    //   contact_email: 'dev@guomingju.com', //'（？？可选）门店联系人邮箱',
    //   shop_address: '果茗星外卖店 - 绍兴菓茗聚餐饮管理有限公司',
    //   shop_address_detail: '果茗星外卖店8号铺', // '（？？可选）门牌号',
    //   shop_lng: 116299545, //'门店经度',
    //   shop_lat: 39922477, // '门店维度',
    //   coordinate_type: 0, //'int 坐标类型 火星坐标-高德，腾讯0 / 1百度坐标',
    //   delivery_service_codes: '4011,4012', //'配送服务code，多个用英文逗号分隔',
    //   business_hours: JSON.stringify([
    //     { beginTime: '00:00', endTime: '23:59' },
    //   ]), //'营业时间'
    // };

    // console.log(qs.stringify(param), 'param', param);

    return await request.post(PEISONTAPI.shopCreate, data);
  } catch (error) {
    console.log('catch--error', error);
  }
};

export const queryShop = async (shopId) => {
  try {
    let data: any = {
      shop_id: shopId || 'test_0001',
    };
    return await request.post(PEISONTAPI.shopQuery, data);
  } catch (error) {
    console.log('catch--error', error);
  }
};

export const updateShop = async (data) => {
  try {
    return await request.post(PEISONTAPI.shopUpdate, data);
  } catch (error) {
    console.log('catch--error', error);
  }
};

export const shopAreaQuery = async (data) => {
  try {
    return await request.post(PEISONTAPI.shopAreaQuery, data);
  } catch (error) {
    console.log('catch--error', error);
  }
};

export const shopBalanceQuery = async (shop_id) => {
  try {
    return await request.post(PEISONTAPI.shopBalanceQuery, { shop_id });
  } catch (error) {
    console.log('catch--error', error);
  }
};
