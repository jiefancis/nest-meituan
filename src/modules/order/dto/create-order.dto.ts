import { IsPhoneNumber } from 'class-validator';

export class CreateOrderDto {
  shop_id: string;
  order_id: string;
  delivery_id: number;
  outer_order_source_desc: number;
  outer_order_source_no: string;
  delivery_service_code: number;
  receiver_name: string;
  receiver_address: string;

  @IsPhoneNumber()
  receiver_phone: string;
  receiver_lng: number;
  receiver_lat: number;
  coordinate_type: number;
  goods_value: number;
  goods_weight: number;

  goods_detail: string;
  // JSON.stringify({
  //   goods: [
  //     {
  //       goodCount: 1,
  //       goodName: '货品名称',
  //       goodPrice: 9.99,
  //       goodUnit: '个',
  //       goodUnitCode: '10008',
  //     },
  //   ],
  // }),
  goods_pickup_info: string;
  expected_delivery_time: number;
  order_type: number;
  note: string;
  rider_pick_method: number;
  // tip_amount: 3,
  goods_code_switch: number;
}
