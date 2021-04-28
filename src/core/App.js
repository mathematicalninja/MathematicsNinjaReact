import React from "react"
import CSSVariableApplicator from "./CSSVariableApplicator";
import PageLayout from "./PageLayout"
// import "../styles/ThemeTemplate.json"
import ColourSwatch from "../Testing/ColourSwatch.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        const theme = require("../styles/ThemeTemplate.json");
        // {
        //     "theme-primary": {
        //         color: "#8DC63F",
        //     }
        // theme.set('--theme-primary-color', '#8DC63F')

        // '--theme-primary-color': '#8DC63F',
        // '--widget-color': '#333333',
        // '--dashboard-footer-text-color': '#FFFFFF',

        this.state = {
            theme: theme,
            themes: theme
        };
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                <CSSVariableApplicator variables={this.state.theme.Default} />
                <ColourSwatch theme={this.state.themes} />
            </div>
        );
    }
}

export default App