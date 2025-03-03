const MEITUAN_API_PREFIX = 'https://peisongopen.meituan.com/api';

export const PEISONTAPI = {
  // 创建门店
  shopCreate: MEITUAN_API_PREFIX + '/shop/create',
  // 门店信息
  shopQuery: MEITUAN_API_PREFIX + '/shop/query',

  // 订单创建
  orderCreate: MEITUAN_API_PREFIX + '/order/createByShop',
  // 订单查询
  orderStatusQuery: MEITUAN_API_PREFIX + '/order/status/query',
};

// export const commonParams = {
//   development: {
//     appkey: '85e68e893b9b48baa95a206fdaaaba8b',
//   },
//   production: {
//     appkey: '2f4a37a884af40eeb4417c5b87c544c5',
//   },
// };
