import React, { useContext, useState } from "react";
import ColourSwatchGrid from "../components/colourThemes/ColourSwatchGrid";
// import ThemeSwapControls from "../components/colourThemes/ThemeSwapControls"
import BlogClass from "../components/blogClass/BlogClass";
import themes from "../styles/ThemeTemplate";
import {
  colourSpecifier,
  colourVariable,
  colourVariableNumber,
  colourVariableSet,
  themeColoursList,
  themeNumbersList,
} from "../styles/themeTyping";
import themeContext from "../styles/utils/ThemeProvider";
import colourClickContext from "../styles/utils/ColourClickProvider";

// import "../components/colourThemes/ColourSwatch.scss"

interface FCColourSwatchProps {}

// themeColoursList;
// themeNumbersList;

const FCColourSwatch: React.FC<FCColourSwatchProps> = ({}) => {
  //   const Theme = useContext(ThemeContext);
  const [click, setClick] = useState<colourSpecifier>({
    colour: "Grey",
    value: "0",
  });
  const ROW = getRow("Primary");
  console.log(click);
  return (
    <div>
      <colourClickContext.Provider value={{ click, setClick }}>
        The current colour is: {click.colour} {click.value}
        <br />
        {getSwatchTable()}
      </colourClickContext.Provider>
    </div>
  );
};
export default FCColourSwatch;

//
//
//
//
//
//
//

function colourClickCallback(
  colour: colourVariable,
  value: colourVariableNumber,
) {
  function R() {
    useContext(themeContext)[colour][value];
  }
  return R;
}

//

//
//
//
//
//
interface FCSwatchButtonProps {
  colour: colourVariableSet;
  value: colourVariableNumber;
}

const FCSwatchButton: React.FC<FCSwatchButtonProps> = ({ colour, value }) => {
  const { click } = useContext(colourClickContext);
  const S = {
    backgroundColor: getColourString(colour, value),
    color: getColour(click).hex(),
  };
  return (
    <button style={S} onClick={clickWrapper({ colour, value })}>
      {getColourString(colour, value)}
    </button>
  );
};

function clickWrapper(click: colourSpecifier) {
  const { setClick } = useContext(colourClickContext);
  return () => {
    // console.log(click); //here the colourSpecifier is correctly logged
    setClick(click);
  };
}
//
//
//
//
//
//

function getRow(colour: colourVariableSet) {
  let R: JSX.Element[] = [];
  for (let n of themeNumbersList) {
    R.push(<FCSwatchButton colour={colour} value={n} />);
  }
  return R;
}

function getSwatchTable() {
  let R: JSX.Element[] = [];
  for (let Col of themeColoursList) {
    R = R.concat(getRow(Col));
  }
  return R;
}

//
//
//
//
//

function getColour(colourPair: colourSpecifier) {
  return useContext(themeContext).theme[colourPair.colour][colourPair.value];
}

function getColourString(
  colour: colourVariableSet,
  value: colourVariableNumber,
) {
  return useContext(themeContext).theme[colour][value].hex();
}

// class ColourSwatch extends React.Component {
//   /*
//     NEED to make colour swatch centered.
//     buttons need to be a seperate entity, that can flex to the bottom if need be, or be right hand side if available.
//     or a dropdown menue? I Like this idea less
//     */
//   constructor(props) {
//     super(props);
//     const startTheme = props.theme ? props.theme : props.themes.Default;
//     this.state = {
//       themes: props.themes,
//       theme: startTheme,
//       backgroundColour: "var(--Secondary-5)",
//     };
//     this.updateColourScheme = props.updateColourScheme;
//     this.handleThemeChange = (themeName) =>
//       props.updateColourScheme(this.state.themes[themeName]);
//   }

//   handleColourClick(colourNameIn_CSS_VarWrapperAsText) {
//     this.setState({ backgroundColour: colourNameIn_CSS_VarWrapperAsText });
//   }

//   render() {
//     // This is where the grid centering should be happens.
//     return (
//       <>
//         {" "}
//         <div
//           className="TheWholeColourThing"
//           style={{
//             backgroundColor: this.state.backgroundColour,
//             color: this.state.backgroundColour,
//           }}
//         >
//           <ColourSwatchGrid
//             theme={this.state.theme}
//             switchColour={(CSSVar) => this.handleColourClick(CSSVar)}
//             bgColour={this.state.backgroundColour}
//             colour={this.state.backgroundColour}
//           />
//           {/* <ThemeSwapControls
//                 themes={this.state.themes}
//                 switchTheme={(themeName) => this.handleThemeChange(themeName)}
//             /> */}
//         </div>
//         <BlogClass blogName={"samplePageExplinations/SwatchBlogExplain.json"} />
//       </>
//     );
//   }
// }

// // export default ColourSwatch;
