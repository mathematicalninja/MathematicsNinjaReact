import React from "react";


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

export default ColourSwatchGrid