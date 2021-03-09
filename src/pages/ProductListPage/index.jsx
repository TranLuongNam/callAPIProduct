import React, { PureComponent } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actDeleteProductrRequest, actFetchProductsRequest } from '../../action';
import '../../App.css';

class ProductListPage extends PureComponent {

  componentDidMount() {
    callApi('products', 'GET', null).then((res) => {
      this.props.fetchAllProducts();
    });
  }
  onDelete = (id) => {
    console.log(id);
    this.props.onDeleteProduct(id);
  };
  render() {
    const {products} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="/product/add" className="btn btn-info mb-10">
					Thêm Sản Phẩm
				</Link>
        <button className="btn btn-danger btn-custom">Xóa Tất Cả</button>
				<ProductList>{this.showProducts(products)}</ProductList>
			</div>
      );
  }
  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} onDeleteProduct={this.onDelete} />;
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductrRequest(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
