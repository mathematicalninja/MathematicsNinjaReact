import React from "react";
import BlogClass from "../components/blogClass/BlogClass";

interface FullBodyPageProps {
  // TODO: change this any to the "React any"
  content?: any;
  blogPost?: BlogClass;
}

class FullPageBody extends React.Component<FullBodyPageProps> {
  render() {
    return (
      <div>
        {/* {this.props.content} */}
        {this.props.blogPost}
      </div>
    );
  }
}

export default FullPageBody;
