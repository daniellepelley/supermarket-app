import { connect } from "react-redux";
import { addProduct, removeProduct } from "../../store/actionCreators";
import { IState } from "../../store/types/IState";
import ShoppingCart from "./ShoppingCart";

const mapStateToProps = (state: IState, ownProps: any) => ({
  basket: state.basket,
  products: state.products,
});
 
const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddProduct: (productCode: string) => dispatch(addProduct(productCode, 1)),
    onRemoveProduct: (productCode: string) => dispatch(removeProduct(productCode, 1))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);