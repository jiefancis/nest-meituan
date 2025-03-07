import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageSizeValidationPipe } from './fileSizeValidation.pipe';
import { fileImageUpload } from '@meituanApi/fileUpload';

@Controller('fileUpload')
export class FileUploadController {
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile(new ImageSizeValidationPipe()) file: Express.Multer.File,
  ) {
    if (file) {
      const prefix = `data:${file.mimetype};base64,`;
      const base64 = prefix + file.buffer.toString('base64');

      try {
        return await fileImageUpload({
          image_name: file.originalname,
          image_data: base64,
        });

        // if (res.code === 0) {
        //   return {
        //     code: 200,
        //     message: '上传成功',
        //     data: res?.data?.fileKey,
        //   };
        // }

        // return {
        //   code: 500,
        //   message: '上传失败',
        //   data: null,
        // };
      } catch (error) {
        return {
          code: 500,
          message: '上传失败',
          data: error,
        };
      }
    }

    return {
      code: 500,
      message:
        '上传失败，图片后缀名仅支持jpg、jpeg、png、bmp，且图片不得大于5M',
    };
  }
}
