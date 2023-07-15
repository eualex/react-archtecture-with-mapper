import { Product } from '@/domain/business/product';

export function ProductsPresentation({ products }: { products: Product[] }) {
  return products.map(product => (
    <>
      <div key={product.name}>
        <h3>{product.name}</h3>
        <span>{product.currencyPrice}</span>
        <ul>
          <li>{product.brand}</li>
          <li>{product.category}</li>
        </ul>
      </div>
      <br />
    </>
  ));
}
