import React from "react"


class CSSVariableApplicator extends React.Component {
    componentDidMount() {
        this.updateCSSVariables(this.props.variables);
    }

    componentDidUpdate(prevProps) {
        if (this.props.variables !== prevProps.variables) {
            this.updateCSSVariables(this.props.variables);
        }
    }
    updateCSSVariables(variables) {
        console.log(variables)
        variables.forEach((value, prop) => {
            console.log(value, prop)
            document.documentElement.style.setProperty(prop, value);
        });
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default CSSVariableApplicator