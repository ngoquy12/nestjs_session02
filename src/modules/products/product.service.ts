import { Injectable } from '@nestjs/common';
import { Product } from './../../entities/Product';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      productId: 1,
      productName: 'Cam 5 cân',
      price: 15000,
    },
    {
      productId: 2,
      productName: 'Bưởi 5 roi',
      price: 75000,
    },
    {
      productId: 3,
      productName: 'Táo trung quốc',
      price: 2000,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    // Tìm kiếm product theo id
    const product = this.products.find((pro) => pro.productId === id);
    return product;
  }

  create(productDto): Product {
    // Tạo id ngẫu nhiên
    const newId = Math.ceil(Math.random() * 1000);

    const newProduct = {
      productId: newId,
      ...productDto, // spread operator
    };

    // push vào mảng
    this.products.push(newProduct);

    // Trả về đối tượng product vừa thêm vào
    return newProduct;
  }

  update(id: number, productDto: ProductDto): Product {
    // Tìm kiếm vị trí của product trong mảng
    const index = this.products.findIndex(
      (pro) => pro.productId === Number(id),
    );

    if (index !== -1) {
      this.products[index].productName = productDto.productName;
      this.products[index].price = productDto.price;
    }

    // Trả về thông tin của product vừa được cập nhật
    return this.products[index];
  }

  remove(id: number): number {
    // Lấy vị trí của product cần xóa
    const index = this.products.findIndex(
      (pro) => pro.productId === Number(id),
    );

    // Nếu tìm thấy
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    return id;
  }
}
