import { GetProductsGatewayHttp } from "../gateways/get-products-gateway-http";
import { FetchHttpClientAdapter } from "../http/fetch-http-client-adapter";

export function makeGetProducts() {
  const client = new FetchHttpClientAdapter('https://dummyjson.com')
  const getProductsGateway = new GetProductsGatewayHttp(client)
  return getProductsGateway
}
