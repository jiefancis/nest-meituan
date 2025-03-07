export const MEITUAN_API_PREFIX = 'https://peisongopen.meituan.com/api';

export const PEISONTAPI = {
  shopCreate: '/shop/create', // 创建门店
  shopQuery: '/shop/query', // 门店信息
  shopUpdate: '/shop/update', // 修改门店
  shopAreaQuery: '/shop/area/query', // 查询门店配送范围
  shopBalanceQuery: '/shop/balance/query', // 查询门店账户余额

  orderPreCreateByShop: '/order/preCreateByShop', // 发单前预览
  orderCreate: '/order/createByShop', // 订单创建
  orderStatusQuery: '/order/status/query', // 订单查询
  orderRiderLocation: '/order/rider/location', // 获取骑手位置
  orderDelete: '/order/delete', // 订单取消
  mealCode: '/mealCode/saveMealCodeByPkgId', //取餐码信息下发
  orderRiderLocationH5: '/order/rider/location/h5url', // 获取骑手位置H5

  fileImageUpload: '/file/image/upload', // 图片上传
};
