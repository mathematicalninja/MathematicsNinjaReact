import React from "react";
import { themeStructure } from "../../styles/themeTyping";

interface CSSVariableApplicatorProps {
  theme: themeStructure;
}

class CSSVariableApplicator extends React.Component<CSSVariableApplicatorProps> {
  componentDidMount() {
    this.updateCSSVariables(this.props.theme);
  }

  componentDidUpdate(prevProps) {
    if (this.props.theme !== prevProps.theme) {
      this.updateCSSVariables(this.props.theme);
    }
  }
  updateCSSVariables(themeObject: themeStructure) {
    /*themeObject{
            colourClass:{
                colourKey:#hexvalue,
                ...
            },
            colourClass2:{...},
            ...
        }*/
    const colourClasses = Object.keys(themeObject);

    colourClasses.forEach((colourClass) => {
      const colourKeys = Object.keys(themeObject[colourClass]);
      colourKeys.forEach((colourKey) => {
        const colourCode = themeObject[colourClass][colourKey];
        const cssVariable = `--${colourClass}-${colourKey}`;
        // here is where we update the css that is already loaded's variable's values
        document.documentElement.style.setProperty(cssVariable, colourCode);
      });
    });
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default CSSVariableApplicator;
