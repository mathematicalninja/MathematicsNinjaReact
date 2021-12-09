import React, { useContext } from "react";
import ColourSwatchGrid from "../components/colourThemes/ColourSwatchGrid";
// import ThemeSwapControls from "../components/colourThemes/ThemeSwapControls"
import BlogClass from "../components/blogClass/BlogClass";
import themes from "../styles/ThemeTemplate";
import {
  colourVariableNumber,
  colourVariableSet,
  themeColoursList,
  themeNumbersList,
} from "../styles/themeTyping";

// import "../components/colourThemes/ColourSwatch.scss"

const ThemeContext = React.createContext(themes.Default);

interface FCColourSwatchProps {}

// themeColoursList;
// themeNumbersList;
const FCColourSwatch: React.FC<FCColourSwatchProps> = ({}) => {
  const Theme = useContext(ThemeContext);

  const ROW = getRow("Primary");
  return (
    <ThemeContext.Provider value={themes.Default}>
      {ROW}
      <div>Colour is: {Theme.Red[4].toString()}</div>
      <FCSwatchButton colour={"Red"} value={"4"} />
      <br />
      {getSwatchTable()}
    </ThemeContext.Provider>
  );
};
export default FCColourSwatch;

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

interface FCSwatchButtonProps {
  colour: colourVariableSet;
  value: colourVariableNumber;
}

const FCSwatchButton: React.FC<FCSwatchButtonProps> = ({ colour, value }) => {
  const S = { backgroundColor: getColourString(colour, value) };
  return <button style={S}>{getColourString(colour, value)}</button>;
};

function getColour(colour: colourVariableSet, value: colourVariableNumber) {
  return useContext(ThemeContext)[colour][value];
}

function getColourString(
  colour: colourVariableSet,
  value: colourVariableNumber,
) {
  return useContext(ThemeContext)[colour][value].hex();
}

class ColourSwatch extends React.Component {
  /*
    NEED to make colour swatch centered.
    buttons need to be a seperate entity, that can flex to the bottom if need be, or be right hand side if available.
    or a dropdown menue? I Like this idea less
    */
  constructor(props) {
    super(props);
    const startTheme = props.theme ? props.theme : props.themes.Default;
    this.state = {
      themes: props.themes,
      theme: startTheme,
      backgroundColour: "var(--Secondary-5)",
    };
    this.updateColourScheme = props.updateColourScheme;
    this.handleThemeChange = (themeName) =>
      props.updateColourScheme(this.state.themes[themeName]);
  }

  handleColourClick(colourNameIn_CSS_VarWrapperAsText) {
    this.setState({ backgroundColour: colourNameIn_CSS_VarWrapperAsText });
  }

  render() {
    // This is where the grid centering should be happens.
    return (
      <>
        {" "}
        <div
          className="TheWholeColourThing"
          style={{
            backgroundColor: this.state.backgroundColour,
            color: this.state.backgroundColour,
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
        <BlogClass blogName={"samplePageExplinations/SwatchBlogExplain.json"} />
      </>
    );
  }
}

// export default ColourSwatch;
