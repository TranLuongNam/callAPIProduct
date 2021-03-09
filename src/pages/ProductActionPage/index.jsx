import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../action";

class ProductAcitonPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status,
      });
    }
  }
  onChange = (e) => {
    // console.log(e);
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    const { id, txtName, txtPrice, chkbStatus } = this.state;
    const { history } = this.props;
    const product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    e.preventDefault();
    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };
  render() {
    const { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm :</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá :</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái :</label>
          </div>
          <div className="check-box">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Còn Hàng
            </label>
          </div>
          <Link to="/product-list" className="btn btn-danger mr-10">
            Hủy Bỏ
          </Link>
          <button type="submit" className="btn btn-primary">
            Lưu Lại
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductAcitonPage);
