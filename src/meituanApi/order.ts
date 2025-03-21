import { PEISONTAPI } from '@constants/meituanApi';
import request from '@utils/request';

export const orderPreCreateByShop = async (data) => {
  try {
    return await request({
      url: PEISONTAPI.orderPreCreateByShop,
      method: 'post',
      data,
    });
  } catch (error) {
    console.log('orderPreCreateByShop--error', error);
  }
};

export const createOrder = async (params) => {
  try {
    let param: any = {
      shop_id: 'test_0001',
      order_id: 'DL111894704342466560',
      delivery_id: 48370743,
      outer_order_source_desc: 101,
      outer_order_source_no: '1000267112645841601',
      delivery_service_code: 4002,
      receiver_name: '张三',
      receiver_address: '地球',
      receiver_phone: '13626753870',
      receiver_lng: 116299545,
      receiver_lat: 39922477,
      coordinate_type: 0,
      goods_value: 16.8,
      goods_weight: 0.5,
      goods_detail: JSON.stringify({
        goods: [
          {
            goodCount: 1,
            goodName: '货品名称',
            goodPrice: 9.99,
            goodUnit: '个',
            goodUnitCode: '10008',
          },
        ],
      }),
      goods_pickup_info: '果茗星外卖店8号铺',
      expected_delivery_time: 1741087303,
      order_type: 0,
      note: '请尽快配送，谢谢',
      rider_pick_method: 0,
      //   tip_amount: 3,
      goods_code_switch: 0,
    };

    return await request.post(PEISONTAPI.orderCreate, params);
  } catch (error) {
    console.log('createOrder--error', error);
  }
};

export const queryOrderStatus = async (params) => {
  try {
    // let param: any = {
    //   delivery_id: 48370743,
    //   mt_peisong_id: '1741001386494001030',
    // };

    return await request.post(PEISONTAPI.orderStatusQuery, params);
  } catch (error) {
    console.log('queryOrderStatus--error', error);
  }
};

export const queryOrderRiderLocation = async (params) => {
  try {
    // let param: any = {
    //   delivery_id: 48370743,
    //   mt_peisong_id: '1741001386494001030',
    // };

    return await request.post(PEISONTAPI.orderRiderLocation, params);
  } catch (error) {
    console.log('orderRiderLocation--error', error);
  }
};

export const orderDelete = async (params) => {
  try {
    return await request.post(PEISONTAPI.orderDelete, params);
  } catch (error) {
    console.log('orderRiderLocation--error', error);
  }
};

export const saveMealCodeByPkgId = async (data) => {
  try {
    return await request.post(PEISONTAPI.mealCode, data);
  } catch (error) {
    console.log('saveMealCodeByPkgId--error', error);
  }
};
