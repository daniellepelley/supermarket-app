import * as React from "react";

type ITotalProps = {
  value: number;
}

const Total = (props: ITotalProps) => {
  const { value } = props;

  return <div>
    {`£${value.toFixed(2)}`}
  </div>
}

export default Total;