export class UserDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  id: number;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  mobile: string;
}
export class CreateUserDto {}
export class UpdateUserDto {}
