import React, { Component, Fragment } from "react";
import ProductComponent from "../components/product";
import { connect } from "react-redux";

// Actions
import { postProduct, getProduct } from "../redux/actions/productAction";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null
    };
  }
  componentDidMount() {
    this.props.getProduct();
  }
  filehandler = event => {
    this.setState({
      imageFile: event.target.files[0]
    });
  };
  fileUploader = () => {
    const fd = new FormData();
    // fd.append("file", this.state.imageFile, this.state.imageFile.name);
    fd.append("file", this.state.imageFile);
    // debugger;
    if (!this.props.loading_product) {
      this.props.postProduct(fd);
      return true;
    }
    return false;
  };
  render() {
    const item = this.props.products || [];
    return (
      <Fragment>
        <div className="row mx-2">
          {item.map((element, index) => {
            return (
              <div className="col-6 my-1 col-md-2" key={index}>
                <p>{element.name}</p>
                <img
                  src={"http://127.0.0.1:5000/static/image/" + element.image}
                  className="img-fluid"
                  width="200px"
                  alt={element.name}
                />
              </div>
            );
          })}
        </div>
        <ProductComponent
          fileuploader={this.fileUploader}
          filehandler={this.filehandler}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  products: state.productReducer.products,
  loading_product: state.productReducer.loading_product
});
const mapReducerToProps = { postProduct, getProduct };
export default connect(mapStateToProps, mapReducerToProps)(Product);
