import React from "react";
import BlogClass from "../components/blogClass/BlogClass";

interface FullBodyPageProps {
  // TODO: change this any to the "React any"
  content?: any;
  blogPostName?: string;
}

class FullPageBody extends React.Component<FullBodyPageProps> {
  render() {
    let blogPost;
    if (typeof this.props.blogPostName === "string") {
      blogPost = <BlogClass blogName={this.props.blogPostName} />;
    }
    return (
      <div>
        {this.props.content}
        {blogPost}
      </div>
    );
  }
}

export default FullPageBody;
