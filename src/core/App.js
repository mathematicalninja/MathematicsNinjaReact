import React from "react"

// meta items, used across site
import CSSVariableApplicator from "./CSSVariableApplicator";
import PageLayout from "./PageLayout"

// particular pages used as instences
import TicTac from "../components/TicTac.js"
import ConnectFour from "../components/ConnectFour.js"


// testing pages
import ColourSwatch from "../Testing/ColourSwatch.js"
import GridGame from "../Testing/GridGame.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        const theme = require("../styles/ThemeTemplate.json");
        this.state = {
            theme: theme.Default,
            themes: theme
        };
    }
    udateColourScheme(props) {
        this.setState(props)
        this.render()
    }
    choosePage(reactClassTag) {
        switch (reactClassTag) {
            case "ColourSwatch":
                return <ColourSwatch
                    theme={this.state.theme}
                    themes={this.state.themes} setState={this.udateColourScheme}

                />

            case "PageLayout":
                return <PageLayout />
            case "ConnectFour":
                return <ConnectFour gridSize={[7, 6]} />
            case "TicTac":
                return <TicTac gridSize={[3, 3]} />

            case "GridGame":
                return <GridGame gridSize={[7, 6]} />
            default:
                return <PageLayout />
        }
    }
    render() {
        return (
            <div>
                <CSSVariableApplicator theme={this.state.theme}>
                    {this.choosePage("PageLayout")}
                    {this.choosePage("ColourSwatch")}
                </CSSVariableApplicator>
            </div>
        );
    }
}

export default App