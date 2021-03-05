import * as React from "react";

type IShoppingCartProps = {
    message: string;
}

const ShoppingCart = (props: IShoppingCartProps) => {

  return <div>{props.message}</div>
}

export { ShoppingCart }