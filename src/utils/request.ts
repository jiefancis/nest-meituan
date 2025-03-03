import axios from 'axios';
import * as qs from 'qs';
import { MEITUAN_API_PREFIX } from '@constants/meituanApi';
import { generateSign } from '@utils/sign';

const mergeParams = (data) => {
  const appKey = process.env.MEITUAN_APP_KEY;
  const appSecret = process.env.MEITUAN_APP_SECRET;

  const params = {
    version: '1.0',
    timestamp: Math.floor(Date.now() / 1000),
    appkey: appKey,
    ...data,
  };
  return { data: params, appSecret };
};

const instance = axios.create({
  baseURL: MEITUAN_API_PREFIX,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

instance.interceptors.request.use((config) => {
  if (config.method === 'post') {
    if (typeof config.data === 'object') {
      const { data, appSecret } = mergeParams(config.data);
      config.data = data;
      const sign = generateSign(config.data, appSecret);

      config.data.sign = sign;
      config.data = qs.stringify(config.data);
    }
  }

  return config;
});

instance.interceptors.response.use((res) => {
  //   console.log('res::', res);
  return res;
});

export default instance;
