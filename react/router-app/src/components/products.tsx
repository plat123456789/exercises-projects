import * as React from "react";
import { Link } from "react-router-dom";

export interface IProductsProps {
  sortBy: string;
}

// export interface ProductsState {

// }

class Products extends React.Component<IProductsProps> {
  public state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" }
    ]
  };
  public render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
