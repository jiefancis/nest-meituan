import { PEISONTAPI } from '@constants/meituanApi';
import request from '@utils/request';
import * as qs from 'qs';
import { mergeParams } from '@utils/request';
import { generateSign } from '@utils/sign';

interface IFileImageUpload {
  image_name: String;
  image_data: string;
}

// 图片上传
export const fileImageUpload = async (params: IFileImageUpload) => {
  const { data, appSecret } = mergeParams({ image_name: params.image_name });
  data.sign = generateSign(data, appSecret);
  data.image_data = params.image_data;

  try {
    return await request({
      url: PEISONTAPI.fileImageUpload,
      method: 'post',
      data: qs.stringify(data),
    });
  } catch (error) {
    console.log('fileImageUpload--error::', error);
  }
};
