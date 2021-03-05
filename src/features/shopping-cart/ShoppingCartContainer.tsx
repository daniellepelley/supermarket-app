import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../store/types/IState";
import ShoppingCart from "./ShoppingCart";

const mapStateToProps = (state: IState, ownProps: any) => ({
  message: state.message,
});
 
const mapDispatchToProps = (dispatch: any) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);