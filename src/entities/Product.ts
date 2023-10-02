export class Product {
  productId: number;
  productName: string;
  price?: number;

  // Hàm khởi tạo
  constructor(productId: number, productName: string, price: number) {
    if (productId !== null) this.productId = productId;
    if (productName !== null) this.productName = productName;
    if (price !== null) this.price = price;
  }
}
