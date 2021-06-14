import React from "react"
import ColourSwatchGrid from "../components/colourThemes/ColourSwatchGrid"
import ThemeSwapControls from "../components/colourThemes/ThemeSwapControls"
import BlogClass from "../components/blogClass/BlogClass"

import "../components/colourThemes/ColourSwatch.scss"

class ColourSwatch extends React.Component {

    /*
    NEED to make colour swatch centered.
    buttons need to be a seperate entity, that can flex to the bottom if need be, or be right hand side if available.
    or a dropdown menue? I Like this idea less
    */
    constructor(props) {
        super(props)
        const startTheme = props.theme ? props.theme : props.themes.Default
        this.state = {
            themes: props.themes,
            theme: startTheme,
            backgroundColour: "var(--Secondary-5)",
        }
        this.updateColourScheme = props.updateColourScheme
        this.handleThemeChange = (themeName) => props.updateColourScheme(this.state.themes[themeName])
    }

    handleColourClick(colourNameIn_CSS_VarWrapperAsText) {
        this.setState({backgroundColour: colourNameIn_CSS_VarWrapperAsText})
    }

    render() {
        // This is where the grid centering should be happens.
        return <> <div className="TheWholeColourThing"
            style={{
                "backgroundColor": this.state.backgroundColour,
                "color": this.state.backgroundColour,
            }}

        >
            <ColourSwatchGrid
                theme={this.state.theme}
                switchColour={(CSSVar) => this.handleColourClick(CSSVar)}
                bgColour={this.state.backgroundColour}
                colour={this.state.backgroundColour}
            />
            {/* <ThemeSwapControls
                themes={this.state.themes}
                switchTheme={(themeName) => this.handleThemeChange(themeName)}
            /> */}
        </div>

            <BlogClass blogName={"SwatchBlogExplain.json"} /></>
    }
}

export default ColourSwatch