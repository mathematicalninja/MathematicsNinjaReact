import React from "react";
import BlogClass from "../components/blogClass/BlogClass";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return <BlogClass blogName="personal/HomePage" />;
};
export default Index;
