import React from "react"

// meta items, used across site
import CSSVariableApplicator from "./CSSVariableApplicator";
import PageItemContainer from "./PageItemContainer"
import PageLayout from "./PageLayout"

// particular pages used as instences
import TicTac from "../components/TicTac.js"
import ConnectFour from "../components/ConnectFour.js"


// testing pages
import ColourSwatch from "../Testing/ColourSwatch.js"
import GridGame from "../Testing/GridGame.js"
import BlogClass from "../Testing/BlogClass";
import SVGPostion from "../Testing/SVGPosition";
import Clocks from "../Testing/Clocks";

class App extends React.Component {
    constructor(props) {
        super(props);
        const themes = require("../styles/ThemeTemplate.json");
        this.state = {
            theme: themes.Default,
            themes: themes,
            page: props.page,
            menueItems:
                [
                    ["Home", "HomePage"],
                    ["Themes", "ColourSwatch"],
                    ["Tic-Tac-Toe", "TicTac"],
                    ["Connect 4", "GridGame"],
                    ["Clocks", "Clocks"],
                    // ["SVG", "SVG"],
                    // ["About me", "AboutPage"],
                ]
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
            case "HomePage":
                return <BlogClass fileLocation={"./Sample.json"} />
            case "PageLayout":
                return <PageLayout menueItems={this.state.menueItems} />
            case "ConnectFour":
                return (<div>
                    <ConnectFour gridSize={[7, 6]} />
                    <BlogClass fileLocation={"./Connect4BlogExplain.json"} />
                </div>)
            case "TicTac":
                return (<div>
                    <TicTac gridSize={[5, 5]} />
                    {/* massive error with file structure. Can't get this to work */}
                    <BlogClass fileLocation={"./TicTacBlogExplain.json"} />
                </div>)

            case "GridGame":
                return (<div>
                    <GridGame
                        gridSize={[7, 6]}
                        diags={[4, 4]}
                        xLens={[4, 4]}
                        yLens={[4, 4]}
                        shortest={[4, 4]}
                    />
                    <BlogClass fileLocation={"./Connect4BlogExplain.json"} />
                </div>)
            case "AboutPage":
                return <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "700"}}>
                        <BlogClass fileLocation={"./Structured.json"} />
                    </div>
                    {/* <div style={{width: "1px"}}> */}
                    <BlogClass fileLocation={"./Sample.json"} />
                    {/* </div> */}
                </div>
            case "SVG":
                return <SVGPostion />
            case "Clocks":
                return <Clocks />
            default:
                return <div>Oh no! You found a blank page!</div>
        }
    }


    // ========================================================================

    updatePageContent(internalReferenceName) {
        this.setState({page: internalReferenceName})


    }

    // ========================================================================



    render() {
        return (
            <CSSVariableApplicator theme={this.state.theme}
                key="this.state.theme">
                <PageItemContainer pageName={this.state.page}
                    key={this.state.page}>
                    <PageLayout
                        pageContent={this.choosePage(this.state.page)}
                        updatePageContent={(ref) => this.updatePageContent(ref)
                        } menueItems={this.state.menueItems} />
                </PageItemContainer>
            </CSSVariableApplicator>
        );
    }
}

export default App