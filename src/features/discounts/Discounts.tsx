import * as React from "react";
import toCurrency from "../../mappers/toCurrency";
import { IAppliedDiscount } from "../../store/types/IAppliedDiscount";
import "./Discounts.css";

type IDiscountProps = {
  discounts: IAppliedDiscount[],
}

const Discounts = (props: IDiscountProps) => {
  const { discounts } = props;

  return <div>
    <span>Savings</span>
    {discounts.map(discount =>
      <div key={discount.title}>
        <div className="discount-title">{discount.title} </div>
        <div className="discount-value">{toCurrency(discount.discount * -1)} </div>
      </div>
    )}
  </div>
}

export default Discounts;