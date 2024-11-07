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
  userId: number;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  price: number;
}
export class CreateProductDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: Number })
  price: number;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}
