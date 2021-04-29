import React from "react"
import CSSVariableApplicator from "./CSSVariableApplicator";
import PageLayout from "./PageLayout"
// import "../styles/ThemeTemplate.json"
import ColourSwatch from "../Testing/ColourSwatch.js"

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
    render() {
        return (
            <div>
                <CSSVariableApplicator theme={this.state.theme}>
                    <ColourSwatch
                        theme={this.state.theme}
                        themes={this.state.themes} setState={this.udateColourScheme}

                    />
                </CSSVariableApplicator>
            </div>
        );
    }
}

export default App