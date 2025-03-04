import { Module } from '@nestjs/common';
import { FileUploadController } from './fileUpload.controller';

@Module({
  imports: [],
  controllers: [FileUploadController],
  providers: [],
  exports: [],
})
export class FileUploadModule {}
