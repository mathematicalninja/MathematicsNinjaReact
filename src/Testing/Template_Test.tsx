import React from "react";

interface ICommonType {
  type: string;
}
export interface IBaseType {
  type: "cell" | "phone";
}
export class Base<
  P extends ICommonType = IBaseType,
> extends React.Component<P> {
  public render() {
    const { type } = this.props;
    switch (type) {
      case "cell":
        return <h1>{this.props.type}</h1>;
      case "phone":
        return <h1>Phone</h1>;
    }
  }
}

interface NewType extends IBaseType {
  name: string;
}

// interface NewType extends Omit<IBaseType, "type"> {
//   type: "newType" | IBaseType["type"];
//   name: string;
// }

class NewBase extends Base<NewType> {
  public render() {
    // if (this.props.type === "newType") {
    //   return <h1>Hi i am new type, and my name is {this.props.name}</h1>;
    // }
    return super.render();
  }
}

export default (
  <div>
    <Base type="cell" name="hello" />
    <Base type={"£"}></Base>
    <NewBase name="example" type="cell" />
  </div>
);
