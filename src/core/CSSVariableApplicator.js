import React from "react"


class CSSVariableApplicator extends React.Component {
    componentDidMount() {
        this.updateCSSVariables(this.props.theme);
    }

    componentDidUpdate(prevProps) {
        if (this.props.theme !== prevProps.theme) {
            this.updateCSSVariables(this.props.theme);
        }
    }
    updateCSSVariables(themeObject) {
        /*themeObject{
            colourClass:{
                colourKey:#hexvalue,
                ...
            },
            colourClass2:{...},
            ...
        }*/
        const colourClasses = Object.keys(themeObject);

        colourClasses.forEach(
            (colourClass) => {
                const colourKeys = Object.keys(themeObject[colourClass]);
                colourKeys.forEach(
                    (colourkey) => {
                        const colourCode = themeObject[colourClass][colourkey]
                        const cssVariable = `--${colourClass}-${colourkey}`
                        document.documentElement.style.setProperty(cssVariable, colourCode);
                    }
                );

            }
        );
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default CSSVariableApplicator