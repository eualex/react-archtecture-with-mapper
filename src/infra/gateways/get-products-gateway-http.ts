import { Product } from "@/domain/business/product";
import { GetProductsUseCase } from "@/domain/usecases/get-products.usecase";
import { HttpClient } from "../http/http-client";
import { ProductResponse } from "./get-products-dto";
import { ProductMapper } from "./get-products-mapper";

export class GetProductsGatewayHttp implements GetProductsUseCase {
  constructor(private readonly client: HttpClient) {}

  async execute(): Promise<Product[]> {
    const response = await this.client.get<ProductResponse>('/products')
    return response.products.map(ProductMapper.toDomain)
  }
}
