import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';
export class ProductDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  id: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  categoryId: number;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  price: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  stock: number;
}
export class CreateProductDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  categoryId: number;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  price: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  stock: number;
}
export class UpdateProductDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  price: number;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  stock: number;
}
