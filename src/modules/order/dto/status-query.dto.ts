import { IsNotEmpty, IsString } from 'class-validator';
export class OrderStatusQueryDto {
  @IsNotEmpty()
  @IsString()
  delivery_id: number;

  @IsNotEmpty()
  @IsString()
  mt_peisong_id: string;
}
