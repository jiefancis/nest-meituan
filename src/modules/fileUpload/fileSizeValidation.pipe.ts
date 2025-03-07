import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ImageSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const acceptedFileTypes = [
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/bmp',
    ];

    const bool =
      value.size < maxSize && acceptedFileTypes.includes(value.mimetype);

    return bool ? value : false;
  }
}
