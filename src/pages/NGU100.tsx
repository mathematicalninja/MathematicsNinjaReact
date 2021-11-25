import Slider from "rc-slider";
import React, { CSSProperties } from "react";

interface NGU100Props {}

interface AugProps {
  scaler: number;

  power: number;

  upgrade: number;
  level: number;
}

interface PowerProps {
  x: number;
  p: number;
}

interface AugMaxProps {
  Augment: number;

  power: number;

  totalLevels: number;
}

const AugmentNames: string[] = [
  "",
  "Safety Scissors",
  "Milk Infusion",
  "Cannon Implant",
  "Shoulder Mounted",
  "Energy Buster",
];
const UpgradeNames: string[] = [
  "Danger Scissors",
  "Drinking the Milk Too",
  "Missile Launcher",
  "Actual Ammunition",
  "Charge Shot",
];

// const SlideStyle = require("./NGU.css");
const NGU100: React.FC<NGU100Props> = ({}) => {
  let augNumber: number = 1;
  let laser: number = 0;
  let maxLevel: number = 100;
  function augSet(value: number) {
    augNumber = value;
    AugMax();
  }
  function laserSet(value: number) {
    laser = value;
    AugMax();
  }
  function maxLevelSet(value: number) {
    maxLevel = value;
    AugMax();
  }

  function power(props: PowerProps) {
    return props.x ** props.p;
  }

  function upgrade(upgradeLevel: number) {
    return upgradeLevel ** 2 + 1;
  }

  function AugCalc(props: AugProps) {
    const [x, p, u, s] = [
      props.level,
      props.power,
      props.upgrade,
      props.scaler,
    ];
    return Math.round(s * power({ x, p }) * upgrade(u));
  }
  interface DisplayItem {
    id: number;
    value: number;
  }
  let DisplayValues: DisplayItem[] = [];
  function AugMax() {
    DisplayValues = [];
    const powers = getPowers();
    for (let u = 0; u <= maxLevel; u++) {
      let x = maxLevel - u;
      let p = 1 + augNumber * powers[laser];
      let s = 25 ** (augNumber - 1);

      DisplayValues[u] = {
        id: u,
        value: AugCalc({
          level: x,
          power: p,
          upgrade: u,
          scaler: s,
        }),
      };
    }
    console.log(DisplayValues);
  }
  return (
    <>
      <h1>NGU</h1>
      <div style={{ display: "flex" }}>
        <div style={{ height: 100, margin: 50, marginTop: 0 }}>
          <Slider
            min={1}
            max={5}
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
            marks={laserString()}
            defaultValue={laser}
            vertical={true}
            reverse={true}
            included={false}
          />
        </div>

        <div style={{ height: 400, margin: 50, marginTop: 0 }}>
          <Slider
            min={0}
            max={100}
            step={1}
            onChange={maxLevelSet}
            marks={get100()}
            defaultValue={maxLevel}
            vertical={true}
            reverse={true}
            included={false}
          />
        </div>
        <div>Value goes here.</div>
        <>{DisplayValues.toString()}</>
        <table>
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
        </table>
      </div>
    </>
  );
};
export default NGU100;
function getLaserSword() {
  let vals: number[] = [];

  for (let i = 0; i <= 20; i++) {
    vals[i] = (110 + (i * 1 + 5)) / 100;
  }
  vals[0] = 1.1;
  vals[20] = 1.4;
  return vals;
}

function getPowers() {
  let vals: number[] = [];

  for (let i = 0; i <= 20; i++) {
    vals[i] = (10 + (i * 1 + 5)) / 100;
  }
  return vals;
}
function laserString() {
  const vals = getLaserSword();

  let strs: string[] = [];
  for (let i = 0; i <= 20; i++) {
    strs[i] = vals[i].toString();
  }
  strs[0] = "1.1";
  strs[20] = "1.40";

  return strs;
}

function get100() {
  let strs: string[] = [];

  for (let i = 0; i <= 100; i++) {
    strs[i] = i.toString();
  }
  return strs;
}
