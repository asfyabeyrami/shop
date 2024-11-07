export class ProductDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  id: number;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  mobile: string;
}
export class CreateProductDto {}
export class UpdateProductDto {}
