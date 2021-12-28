import React, { CSSProperties } from "react";

interface centerThisProps {}

const style: CSSProperties = {
  display: "grid",
};

const CenterThis: React.FC<centerThisProps> = (props) => {
  return (
    <div style={style}>
      <div />
      {props.children}
      <div />
    </div>
  );
};
export default CenterThis;
