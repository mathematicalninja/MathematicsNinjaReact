import React, { useContext } from "react";
// import App from "../core/App";
import { AppProps } from "next/app";
import "../styles/mainStyle.scss";
import PageHeader from "../core/header/PageHeader";
import CSSVariableApplicator from "../core/wrappers/CSSVariableApplicator";

import themes from "../styles/ThemeTemplate";
// const ThemeContext = React.createContext(themes.Default);

import "./NGU.css";
import themeContext from "../styles/utils/ThemeProvider";

const ThemeContext = themeContext;
// function MyApp({ Component, pageProps }: AppProps) {
//   return <App page="HomePage" />;
// }

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    // <ChakraProvider resetCSS theme={theme}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CSSVariableApplicator theme={theme} key="this.state.theme">
        <PageHeader layout="desktop" />
        <Component {...pageProps} />
      </CSSVariableApplicator>
    </ThemeContext.Provider>
    // </ChakraProvider>
  );
};

// interface _appProps {}

// const _app: React.FC<_appProps> = ({}) => {
//   const Theme = useContext(ThemeContext);
//   return (
//     <ThemeContext.Provider value={themes.Default}>
//       <CSSVariableApplicator theme={themes.Default} key="this.state.theme">
//         <PageHeader layout="desktop" />
//         <Component {...pageProps} />
//       </CSSVariableApplicator>
//     </ThemeContext.Provider>
//   );
// };
// export default _app;

export default MyApp;
// export default withUrqlClient(CreateURQLClient)(MyApp);

// const FCColourSwatch: React.FC<FCColourSwatchProps> = ({}) => {
//   const ClickedColour = useContext(ColourClick);
//   const ROW = getRow("Primary");
//   return (
//     <ColourClick.Provider value={{ value: "3", colour: "Primary" }}>
//       {/* {ROW}
//       <div>Colour is: {Theme.Red[4].toString()}</div>
//       <FCSwatchButton colour={"Red"} value={"4"} /> */}
//       The current colour isL {ClickedColour}
//       <br />
//       {getSwatchTable()}
//     </ColourClick.Provider>
//   );
// };
// export default FCColourSwatch;
