import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  productId: number;

  @IsNotEmpty({ message: 'Tên sản phẩm không được phép để trống.' })
  @MinLength(5, { message: 'Tên sản phẩm không được ngắn hơn 5 ký tự.' })
  productName: string;

  @IsNumber({}, { message: 'Giá sản phẩm phải là một số.' })
  price?: number;
}
