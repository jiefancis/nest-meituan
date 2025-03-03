export const MEITUAN_API_PREFIX = 'https://peisongopen.meituan.com/api';

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
