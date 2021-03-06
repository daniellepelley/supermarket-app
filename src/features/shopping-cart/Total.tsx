import * as React from "react";
import toCurrency from "../../mappers/toCurrency";

type ITotalProps = {
  title: string;
  value: number;
}

const Total = (props: ITotalProps) => {
  const { title, value } = props;

  return <div>
    <div className="total-title">
      {title}
    </div>
    <div className="total-value">
      {toCurrency(value)}
    </div>
  </div>
}

export default Total;