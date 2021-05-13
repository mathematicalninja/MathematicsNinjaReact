import React from "react";
import "./ColourSwatch.scss"
import BlogClass from "./BlogClass"

class ColourSwatchGrid extends React.Component {
    // refactor as a function?
    // need switchColour to be appropriately called back.
    constructor(props) {
        super(props)
        this.state = {
            theme: props.theme,
            colour: props.bgColour,
            bgColour: props.bgColour,
        }
        this.switchColour = props.switchColour
    }

    themeStrips(themeObject) {

        const colourClasses = Object.keys(themeObject);

        let swatchesArray = [];

        colourClasses.forEach(
            (colourClass) => {
                swatchesArray.push(this.generateSwatch(themeObject[colourClass], colourClass))
            }
        );

        return (
            <div className="swatches" key="swatches">{swatchesArray}</div>
        )

    }

    createButton(colourSetName, colourKey, colourCode) {
        const cssVariable = `--${colourSetName}-${colourKey}`

        const styleText = {
            // find a way to push this upstream

            // color being `var(${cssVariable})` out blanks the text

            "width": "100px",
            "height": "100px",
            "background": `var(${cssVariable})`,
            // "color": `var(${cssVariable})`,
            "color": this.props.colour,
            // "color": `var(${cssVariable})`,
            border: "0px none",
            "margin": "3px",
            // "margin": "3px solid transparent",

        }

        // `width: 100px;height: 100px;background - color: var(${cssVariable});`
        return (
            <button style={styleText}
                key={`${cssVariable} ${this.state.colour}`}
                onClick={() => this.switchColour(`var(${cssVariable})`)}
            >
                {colourSetName}
                <br />
                {colourKey}
                <br />
                {colourCode}

            </button>
        )


    }

    generateSwatch(colourSet, colourSetName) {
        let swatch = [];
        const colourKeys = Object.keys(colourSet);
        colourKeys.forEach(
            (colourKey) => {
                swatch.push(this.createButton(colourSetName, colourKey, colourSet[colourKeys[colourKey]]))
            }
        );
        return <div key={colourSetName} className={colourSetName}>{swatch}</div>
    }

    render() {
        return this.themeStrips(this.state.theme)
    }
}

class ThemeSwapControls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {themes: props.themes}
        this.switchTheme = props.switchTheme
    }

    renderThemeSwitchButtons() {
        const themeNames = Object.keys(this.state.themes)
        let themeButtons = [];

        for (let themeName of themeNames) {
            themeButtons.push(
                <button
                    onClick={() => this.switchTheme(themeName)}
                    key={themeName}
                    className="themButton"
                >
                    {themeName}
                </button>
            )
        }
        return <div>{themeButtons}</div>
    }

    render() {
        return <div className="switchTheme" key="switchTheme">{this.renderThemeSwitchButtons()}</div>
    }
}

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

            <BlogClass fileLocation={"./SwatchBlogExplain.json"} /></>
    }
}

export default ColourSwatch