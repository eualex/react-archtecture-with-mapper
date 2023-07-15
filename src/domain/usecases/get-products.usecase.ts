import { Product } from "../business/product";

export interface GetProductsUseCase {
  execute(): Promise<Product[]>
}
