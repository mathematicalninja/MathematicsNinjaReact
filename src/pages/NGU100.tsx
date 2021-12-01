import Slider from "rc-slider";
import React, { CSSProperties, useState } from "react";
import {
  AugMax,
  AugMaxToString,
  DisplayItem,
  NGU100TableData,
} from "../utils/NGU/NGU100Functions";
import {
  AugmentNames,
  get100,
  getPowers,
  laserString,
} from "../utils/NGU/NGU100Init";
import StringTableDisplay, {
  tableCols,
  TableData,
} from "../components/global/StringTableDisplay";
// import // numberTableDataUnit,
// // stringTableData,
// "../components/global/StringTableDisplay";

interface NGU100Props {}

// const testData: stringTableData = [
//   {
//     col1: "Hello",
//     col2: "World",
//   },
//   {
//     col1: "react-table",
//     col2: "rocks",
//   },
//   {
//     col1: "whatever",
//     col2: "you want",
//   },
// ];

// const testCols: tableCols = [
//   {
//     Header: "Column 1",
//     accessor: "col1", // accessor is the "key" in the data
//   },
//   {
//     Header: "Column 2",
//     accessor: "col2",
//   },
// ];

const NGU100TableCols: tableCols = [
  { Header: "Augment", accessor: "AugLev" },
  { Header: "Upgrade", accessor: "upgLev" },
  { Header: "Multiplier", accessor: "value" },
  { Header: "Exponent", accessor: "exponent" },
];

// const SlideStyle = require("./NGU.css");
const NGU100: React.FC<NGU100Props> = ({}) => {
  const [augNumber, augSet] = useState(0);
  const [laserLevel, laserSet] = useState(0);
  const [totalLevels, totalLevelsSet] = useState(100);
  const [DisplayValues, DisplayValuesSet] = useState<
    TableData<string, NGU100TableData<string>>
  >([{ AugLev: "", exponent: "", upgLev: "", value: "" }]);

  return (
    <>
      <h1>NGU</h1>
      <div style={{ display: "flex" }}>
        <div style={{ height: 100, margin: 50, marginTop: 0 }}>
          <Slider
            min={0}
            max={4}
            marks={AugmentNames}
            step={1}
            onChange={augSet}
            defaultValue={augNumber}
            vertical={true}
            reverse={true}
            included={false}
          />
        </div>

        <div style={{ height: 400, margin: 50, marginTop: 0 }}>
          <Slider
            min={0}
            max={20}
            step={1}
            onChange={laserSet}
            marks={laserString}
            defaultValue={laserLevel}
            vertical={true}
            reverse={true}
            included={false}
          />
        </div>

        <div style={{ height: 400, margin: 50, marginTop: 0 }}>
          <Slider
            min={1}
            max={100}
            step={1}
            onChange={totalLevelsSet}
            marks={get100()}
            defaultValue={totalLevels}
            vertical={true}
            reverse={true}
            included={false}
          />
        </div>
        <button
          onClick={() => {
            DisplayValuesSet(
              AugMaxToString(AugMax({ augNumber, laserLevel, totalLevels })),
            );
          }}
          style={{ width: 100, height: 25 }}
        >
          run
        </button>
        <div>Value goes here.</div>
        <StringTableDisplay d={DisplayValues} c={NGU100TableCols} />

        {/* <>{DisplayValues.toString()}</> */}
        {/* <table>
          {DisplayValues.map((item) => (
            <tr>
              <td key={item}>{DisplayValues[item]}</td>
            </tr>
          ))}
        </table>

        <table>
          <tr key={"header"}>
            {Object.keys(DisplayValues[0]).map((key) => (
              <th>{key}</th>
            ))}
          </tr>
          {DisplayValues.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table> */}
      </div>
    </>
  );
};
export default NGU100;
