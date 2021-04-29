import React from "react";
import "./ColourSwatch.scss"

class ColourSwatchGrid extends React.Component {
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

        return <div className="swatchContainer">
            <div className="swatches" key="swatches">{swatchesArray}</div>
        </div>

    }

    generateSwatch(colourSet, colourSetName) {
        let swatch = [];
        const colourKeys = Object.keys(colourSet);
        colourKeys.forEach(
            (colourKey) => {
                const cssVariable = `--${colourSetName}-${colourKey}`

                const styleText = {
                    // color being `var(${cssVariable})` out blanks the text

                    "width": "100px",
                    "height": "100px",
                    "background": `var(${cssVariable})`,
                    "color": `var(${cssVariable})`,
                    // "color": this.state.colour,
                    border: "0px none",
                    "margin": "2px"

                }

                // `width: 100px;height: 100px;background - color: var(${cssVariable});`
                swatch.push(
                    <button style={styleText}
                        key={`${cssVariable} ${this.state.colour}`}
                        onClick={() => this.switchColour(`var(${cssVariable})`)}
                    >
                        {cssVariable}
                        <br></br>
                        {colourSet[colourKeys[colourKey]]}

                    </button>
                )
            }
        );
        return <div key={colourSetName}>{swatch}</div>
    }

    render() {
        return <div
            style={{
                "margin": "0 auto"
            }}
            className="JustTheSwatchGrid"
        >
            {this.themeStrips(this.state.theme)}
        </div>
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
        return <div className="switchTheme" key="swatchTheme">{this.renderThemeSwitchButtons()}</div>
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
        return <div className="TheWholeColourThing"
            style={{
                "background-color": this.state.backgroundColour,
            }}

        >
            <ColourSwatchGrid
                theme={this.state.theme}
                switchColour={(CSSVar) => this.handleColourClick(CSSVar)}
                bgColour={this.state.backgroundColour}
                colour={this.state.backgroundColour}
            />
            <ThemeSwapControls
                themes={this.state.themes}
                switchTheme={(themeName) => this.handleThemeChange(themeName)}
            />
        </div>
    }
}

export default ColourSwatch