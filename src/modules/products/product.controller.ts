import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './../../entities/Product';
import { ProductDto } from './dto/product.dto';
import { ResponseData } from './../../global/handleResponse';
import { HttpMessage, HttpStatus } from 'src/global/enum/enum';

@Controller('api/v1/products')
export class ProductController {
  // HTTP request: get, post, put, patch, delete
  // decorator là những hàm không thực thi độc lập mà nó luôn đi kèm với một class, method, property
  // Hàm có 2 loại: hàm trả vè giá trị và hàm không trả về giá trị

  // This dùng để trỏ đến đối tượng mà nó đang đứng

  // DTO Data Transform Object

  // Hàm khởi tạo
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.findAll(),
        HttpMessage.SUCCESS,
        HttpStatus.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product[]>(
        null,
        HttpMessage.FAILED,
        HttpStatus.FAILED,
      );
    }
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Product {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() productDto: ProductDto): Product {
    return this.productService.create(productDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() productDto: ProductDto,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.update(id, productDto),
        HttpMessage.UPDATED,
        HttpStatus.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpMessage.FAILED,
        HttpStatus.FAILED,
      );
    }
  }

  @Delete('/:id')
  remove(@Param('id') id: number): number {
    return this.productService.remove(id);
  }
}
