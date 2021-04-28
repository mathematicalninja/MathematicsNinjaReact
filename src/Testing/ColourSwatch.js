import React from "react";

class ColourSwatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            themes: props.theme,
            theme: props.theme.Default
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
            <div className="swatches">{swatchesArray}</div>
            <div className="switchTheme">{this.renderThemeSwitchButtons()}</div>
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
        return <div>{swatch}</div>
    }

    renderThemeSwitchButtons() {
        const themeNames = Object.keys(this.state.themes)
        let themeButtons = [];

        for (let themeName of themeNames) {
            themeButtons.push(
                <button
                    onClick={() => this.switchTheme(themeName)}
                    key={themeName}
                >
                    {themeName}
                </button>
            )
        }
        return <div>{themeButtons}</div>
    }

    switchTheme(themeName) {
        this.setState = { theme: this.state.themes[themeName] }
    }

    render() {
        return this.themeStrips(this.state.theme)
    }
}

export default ColourSwatch