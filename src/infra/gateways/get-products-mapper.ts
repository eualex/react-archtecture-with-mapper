import { Product } from "@/domain/business/product";
import { ProductDTO } from "./get-products-dto";

export class ProductMapper {
  static toDomain(raw: ProductDTO) {
    return new Product({
      brand: raw.brand,
      category: raw.category,
      name: raw.title,
      price: raw.price
    })
  }
}
