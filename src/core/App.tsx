import React from "react";

// meta items, used across site
import CSSVariableApplicator from "./wrappers/CSSVariableApplicator";
import PageItemContainer from "./wrappers/PageItemContainer";
import PageLayout from "./body/PageLayout";

// particular pages used as instences
// import TicTac from "../components/games/TicTac.js";
import TicTacPage from "../PageTypes/TicTac";
import ConnectFour from "../components/games/ConnectFour";

// full pages, demonstrating individual features
import ColourSwatch from "../PageTypes/ColourSwatch";
import Clocks from "../PageTypes/Clocks";

// components used across the App
import BlogClass from "../components/blogClass/BlogClass";

// testing pages
import GridGame from "../components/games/GridGame";
// import Graphs from "../Testing/Graphs";

// Page Layout
import PageHeader from "./header/PageHeader";
import PageFooter from "./footer/PageFooter";
import PageBody from "./body/PageBody";

interface AppState {
  theme: any;
  themes: any;
  page: any;
  menuItems: any;
}

interface AppProps {
  page?: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    const themes = require("../styles/ThemeTemplate.json");
    this.state = {
      theme: themes.Default,
      themes: themes,
      page: props.page,
      menuItems: [
        ["Home", "HomePage"],
        ["Themes", "ColourSwatch"],
        ["Tic-Tac-Toe", "TicTac"],
        ["Connect 4", "GridGame"],
        ["Clocks", "Clocks"],
        // ["Graphs", "Graphs"],
        // ["About me", "AboutPage"],
      ],
    };
  }
  updateColourScheme(theme) {
    this.setState({ theme: theme });
    // this.render()
  }
  choosePage(reactClassTag) {
    switch (reactClassTag) {
      case "ColourSwatch":
        const keyInput = this.state.theme;
        return (
          <ColourSwatch
            theme={this.state.theme}
            themes={this.state.themes}
            key={keyInput}
            // this isn't a reference to the teme's name
            updateColourScheme={(theme) => this.updateColourScheme(theme)}
          />
        );
      case "HomePage":
        return <BlogClass blogName={"personal/Sample.json"} />;
      // case "PageLayout":
      //   return <PageLayout menuItems={this.state.menuItems} />;
      case "ConnectFour":
        return (
          <div>
            <ConnectFour gridSize={[7, 6]} />
            <BlogClass
              blogName={"samplePageExplinations/Connect4BlogExplain.json"}
            />
          </div>
        );

      case "TicTac":
        return (
          <div>
            <TicTacPage />
          </div>
        );

      case "GridGame":
        return (
          <div>
            <GridGame
              gridSize={[7, 6]}
              // diags={[4, 4]}
              // xLens={[4, 4]}
              // yLens={[4, 4]}
              // shortest={[4, 4]}
            />
            <BlogClass
              blogName={"samplePageExplinations/Connect4BlogExplain.json"}
            />
          </div>
        );
      case "AboutPage":
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "700" }}>
              <BlogClass blogName={"personal/Structured.json"} />
            </div>
            {/* <div style={{width: "1px"}}> */}
            <BlogClass blogName={"personal/Sample.json"} />
            {/* </div> */}
          </div>
        );
      case "Clocks":
        return <Clocks />;
      // case "Graphs":
      //   return <Graphs />;
      default:
        return <div>Oh no! You found a blank page!</div>;
    }
  }

  // ========================================================================

  updatePageContent(internalReferenceName) {
    this.setState({ page: internalReferenceName });
  }

  // ========================================================================

  render() {
    return (
      <CSSVariableApplicator theme={this.state.theme} key="this.state.theme">
        <PageHeader layout="desktop" />
        <PageBody />
        <PageFooter />
        {/* <PageItemContainer pageName={this.state.page} key={this.state.page}>
          <PageLayout
            pageContent={this.choosePage(this.state.page)}
            updatePageContent={(ref) => this.updatePageContent(ref)}
            menuItems={this.state.menuItems}
          />
        </PageItemContainer> */}
      </CSSVariableApplicator>
    );
  }
}

export default App;
