import React from "react";

interface Inull {}
interface IParentProps extends Inull {
  name: string;
}

class Parent<P> extends React.Component<P & IParentProps, {}> {
  render() {
    return <div>{this.props.name}</div>;
  }
}

interface IChildProps extends IParentProps {
  id: number;
}

class Child<T = { name: String; id: number; extra: Boolean }> extends Parent<
  T & IChildProps
> {
  render(): JSX.Element {
    return (
      <div>
        {this.props.name} is number {this.props.id}.
      </div>
    );
  }
}

interface IGKid {
  name: string;
  id: number;
  extra: Boolean;
}
class Grankid extends Child<IGKid> {
  render() {
    return (
      <div>
        {this.props.name} is number {this.props.id}. Also {this.props.extra}
      </div>
    );
  }
}
export default (
  <div>
    <Parent name={"Proud Parent"} />
    <Child id={0} name={"This component"} />;
    <Grankid name="Gran" id={3} extra={false} />
  </div>
);
