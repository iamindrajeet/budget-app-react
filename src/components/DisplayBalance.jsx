import React from "react";
import { Statistic } from "semantic-ui-react";

const DisplayBalance = ({title, value, size="tiny", ...props}) => {
  return (
    <Statistic size={size} {...props}>
      <Statistic.Label style={{ textAlign: "left" }}>{title}</Statistic.Label>
      <Statistic.Value>${value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
