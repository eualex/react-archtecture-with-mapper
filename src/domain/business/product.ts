import { capitalize } from '../utils/capitalize';

interface IProductProps {
  name: string;
  price: number;
  brand: string;
  category: string;
}

export class Product {
  constructor(private readonly props: IProductProps) {}

  get currencyPrice() {
    return Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: 'currency',
    }).format(this.props.price);
  }
  get rawPrice() {
    return this.props.price;
  }
  get name() {
    return capitalize(this.props.name);
  }
  get brand() {
    return capitalize(this.props.brand);
  }
  get category() {
    return capitalize(this.props.category);
  }
}
