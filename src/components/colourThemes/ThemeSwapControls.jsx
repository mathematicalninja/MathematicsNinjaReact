import React from "react"

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

export default ThemeSwapControls