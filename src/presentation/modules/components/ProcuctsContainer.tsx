import { makeGetProducts } from "@/infra/factories/makeGetProducts";
import { ProductsPresentation } from "./ProductsPresentation";

const getProducts = makeGetProducts()

export async function ProductsContainer() {
  const products = await getProducts.execute()

  return (
    <ProductsPresentation products={products} />
  )
}
