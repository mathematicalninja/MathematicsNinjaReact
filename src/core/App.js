import React from "react"
import CSSVariableApplicator from "./CSSVariableApplicator";
import PageLayout from "./PageLayout"

class App extends React.Component {
    constructor(props) {
        super(props);
        const theme = new Map()
        theme.set('--theme-primary-color', '#8DC63F')
        // {
        //     '--theme-primary-color': '#8DC63F',
        //     '--widget-color': '#333333',
        //     '--dashboard-footer-text-color': '#FFFFFF',
        // };
        this.state = { theme: theme };
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                <CSSVariableApplicator variables={this.state.theme} />
                <PageLayout />
            </div>
        );
    }
}

export default App