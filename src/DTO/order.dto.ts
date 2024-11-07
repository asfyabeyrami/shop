import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  IsInt,
  IsEnum,
  IsOptional,
  IsIn,
} from 'class-validator';
export class OrderDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  id: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  userId: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  productId: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  quantity: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  totalPrice: number;

  @IsIn(['pending', 'completed', 'cancelled'])
  status?: string;

  @IsNotEmpty()
  @ApiProperty({ type: Date })
  createdAt: Date;

  @IsNotEmpty()
  @ApiProperty({ type: Date })
  updatedAt: Date;

  @IsNotEmpty()
  @ApiProperty({ type: Date })
  deletedAt: Date;
}
export class CreateOrderDto {
    @IsNotEmpty()
    @ApiProperty({ type: Number })
    productId: number;

    @IsNotEmpty()
    @ApiProperty({ type: Number })
    quantity: number;

    @IsIn(['pending', 'completed', 'cancelled'])
    status?: string;
}
export class UpdateProductDto extends PartialType(CreateOrderDto) {}
