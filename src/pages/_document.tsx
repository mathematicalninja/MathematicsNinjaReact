import React from "react";
import ReactDOM from "react-dom";
// import "./index.scss";
import App from "../core/App";

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// ========================================

// ReactDOM.render(<App page="HomePage" />, document.getElementById("root"));

export default class Document extends NextDocument {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
