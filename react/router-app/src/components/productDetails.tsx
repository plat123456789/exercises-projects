import * as React from "react";

interface IProductDetailsProps {
  match: any;
  history: any;
}

// export interface ProductDetailsState {

// }

class ProductDetails extends React.Component<IProductDetailsProps> {
  public render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
  private handleSave = () => {
    this.props.history.push("/products");
  };
}

export default ProductDetails;
