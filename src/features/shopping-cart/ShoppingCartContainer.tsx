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
    onAddProduct: (productCode: string, quantity: number) => dispatch(addProduct(productCode, quantity)),
    onRemoveProduct: (productCode: string, quantity: number) => dispatch(removeProduct(productCode, quantity))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);