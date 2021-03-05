import * as React from "react";
import { IAppliedDiscount } from "../../store/types/IAppliedDiscount";

type IDiscountProps = {
  discounts: IAppliedDiscount[],
}

const Discounts = (props: IDiscountProps) => {
  const { discounts } = props;

  return <div>
    {discounts.map(discount =>
      <div key={discount.title}>
        <div>{discount.title} </div>
        <div>{discount.discount} </div>
      </div>
    )}
  </div>
}

export default Discounts;