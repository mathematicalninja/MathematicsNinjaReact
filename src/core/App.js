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
        const themes = require("../styles/ThemeTemplate.json");
        this.state = {
            theme: themes.Default,
            themes: themes,
            page: props.page,
        };
    }
    updateColourScheme(theme) {
        this.setState({theme: theme})
        // this.render()
    }
    choosePage(reactClassTag) {
        switch (reactClassTag) {
            case "ColourSwatch":
                const keyInput = this.state.theme
                return <ColourSwatch
                    theme={this.state.theme}
                    themes={this.state.themes}
                    key={keyInput}
                    updateColourScheme={(theme) => this.updateColourScheme(theme)}

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
    updatePageContent(internalReferenceName) {
        this.setState({page: internalReferenceName})
    }
    render() {
        return (
            <CSSVariableApplicator theme={this.state.theme}
                key="this.state.theme">
                <PageLayout
                    pageContent={this.choosePage(this.state.page)}
                    updatePageContent={(ref) => this.updatePageContent(ref)} />
            </CSSVariableApplicator>
        );
    }
}

export default App