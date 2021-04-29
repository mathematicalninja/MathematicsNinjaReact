import React from "react";
import "./ColourSwatch.scss"

class ColourSwatchGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: props.theme
        }
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
                    "width": "100px",
                    "height": "100px",
                    "background": `var(${cssVariable})`
                }

                // `width: 100px;height: 100px;background - color: var(${cssVariable});`
                // console.log(colourSet[colourKeys[colourKey]])
                swatch.push(
                    <button style={styleText}
                        key={cssVariable}>
                        {cssVariable}
                        <br></br>
                        {colourSet[colourKeys[colourKey]]}

                    </button >
                )
                // console.log(cssVariable, colourCode)
            }
        );
        return <div key={colourSetName}>{swatch}</div>
    }
    render() {
        return <div>
            {this.themeStrips(this.state.theme)}
        </div>
    }
}

class ThemeSwapControls extends React.Component {
    constructor(props) {
        super(props)
        this.state = { themes: props.themes }
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

    // switchTheme(themeName) {
    //     // console.log(themeName)
    //     return
    //     // this.setState = { theme: this.state.themes[themeName] }
    // }
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
        this.state = {
            themes: props.themes,
            theme: props.theme ? props.theme : props.themes.Default
        }
        this.parentSetState = props.setState
    }

    handleThemeChange(themeName) {
        this.setState({ theme: this.state.themes[themeName] })
    }

    handleColourClick() {

    }

    render() {
        return <>
            <ColourSwatchGrid theme={this.state.theme} />
            <ThemeSwapControls
                themes={this.state.themes}
                switchTheme={this.handleThemeChange}
            />
        </>
    }
}

export default ColourSwatch