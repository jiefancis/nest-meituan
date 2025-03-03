import * as CryptoJS from 'crypto-js';

function isObject(o) {
  return typeof o === 'object' && o !== null;
}

export function generateSign(params, appSecret) {
  if (isObject(params)) {
    // 排序参数
    const sortedParams = Object.keys(params)
      .filter((key) => ![undefined, null].includes(params[key]))
      .sort()
      .reduce((result: any, key: string) => {
        result[key] = params[key];
        return result;
      }, {});

    // 拼接待签名字符串
    const signStr = Object.entries(sortedParams)
      .map(([key, value]) => `${key}${value}`)
      .join('');
    // console.log('signStr::', appSecret + signStr);
    return CryptoJS.SHA1(appSecret + signStr).toString();
  }
}
