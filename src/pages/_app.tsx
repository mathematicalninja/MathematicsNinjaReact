import App from "../core/App";
import { AppProps } from "next/app";
import "../styles/mainStyle.scss";
import PageHeader from "../core/header/PageHeader";
import CSSVariableApplicator from "../core/wrappers/CSSVariableApplicator";

import themes from "../styles/ThemeTemplate";

import "./NGU.css";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <App page="HomePage" />;
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider resetCSS theme={theme}>
    <CSSVariableApplicator theme={themes.Default} key="this.state.theme">
      <PageHeader layout="desktop" />
      <Component {...pageProps} />
    </CSSVariableApplicator>
    // </ChakraProvider>
  );
}

export default MyApp;
// export default withUrqlClient(CreateURQLClient)(MyApp);
