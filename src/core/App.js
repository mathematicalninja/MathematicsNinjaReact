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
            case "HomePage":
                return <div>
                    Hi, I'm Alex.

                    I'm a Cambridge educated Mathematician and a self taught programmer currently looking for work.
<br />
                    This website was
                    built, styled and deployed by me.
                    I built it with React.js; my knowledge of CSS, JS, and HTML; and nothing more. Starting from mid April 2021.
                    <br />

                    The styling and design work was all me, as I do have an eye for style, though it is not my best feature I can still be proud of it.
                    <br />

                    I decided to do this simply as an exercise to learn React.js as I had never used it before. Then two weeks later I had a functioning website, which I will continue to add to.
                    <br />

                    I also intend to migrate a few of my more ambitious (often Python) endevours into a web-friendly format and add them onto here.
                    <br />

                    They are mostly mathematical visualisations and ways to be more interactive with the "Black-Box" many I have spoken to are mystified by.
                    Some are my attempts to answer a question that I had (number crunching probabilistic expectations for example).
                    And a few more are ways for me to use my skills with mathematics and programming to create tools for my hobbies.
</div>
            case "PageLayout":
                return <PageLayout />
            case "ConnectFour":
                return <ConnectFour gridSize={[7, 6]} />
            case "TicTac":
                return <TicTac gridSize={[3, 3]} />

            case "GridGame":
                return <GridGame gridSize={[7, 6]} />
            case "AboutPage":
                return <BlogClass />
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
                        updatePageContent={(ref) => this.updatePageContent(ref)} />
                </PageItemContainer>
            </CSSVariableApplicator>
        );
    }
}

export default App