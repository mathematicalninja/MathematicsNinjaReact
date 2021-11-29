import {
  // numberTableData,
  // numberTableDataUnit,
  // stringTableData,
  TableData,
} from "../../components/global/StringTableDisplay";
import { getPowers } from "./NGU100Init";

interface PowerProps {
  x: number;
  p: number;
}
function power(props: PowerProps) {
  return props.x ** props.p;
}

function upgrade(upgradeLevel: number) {
  return upgradeLevel ** 2 + 1;
}

interface AugProps {
  scaler: number;
  power: number;
  upgrade: number;
  level: number;
}

function AugCalc(props: AugProps): number {
  const [x, p, u, s] = [props.level, props.power, props.upgrade, props.scaler];
  return Math.round(s * power({ x, p }) * upgrade(u));
}

interface AugMaxProps {
  augNumber: number;
  laserLevel: number;
  totalLevels: number;
}

export interface DisplayItem {
  AugLevel: number;
  value: number;
}

export interface NGU100TableData<Type> {
  [key: string]: Type; //declaring this is a dic

  AugLev: Type;
  upgLev: Type;
  value: Type;
  exponent: Type;
}
// interface NGU100StringTableData extends stringTableData {
//   AugLev: string;
//   upgLev: string;
//   value: string;
//   exponent: string;
// }

export function AugMax({ totalLevels, augNumber, laserLevel }: AugMaxProps) {
  let DisplayValues: TableData<number, NGU100TableData<number>> = [
    {
      AugLev: 0,
      upgLev: 0,
      value: 0,
      exponent: 0,
    },
  ];
  const t = DisplayValues[0]["AugLev"];

  const powers = getPowers();
  for (let u = 0; u <= totalLevels; u++) {
    let x = totalLevels - u;
    let p = 1 + augNumber * powers[laserLevel];
    let s = 25 ** (augNumber - 1);

    DisplayValues[u] = {
      AugLev: u,
      upgLev: totalLevels - u,
      exponent: powers[laserLevel],
      value: AugCalc({
        level: x,
        power: p,
        upgrade: u,
        scaler: s,
      }),
    };
  }
  console.log(DisplayValues);
  return DisplayValues;
}

export function AugMaxToString(
  DisplayValues: TableData<number, NGU100TableData<number>>,
) {
  let R: TableData<string, NGU100TableData<string>> = [];
  for (let i = 0; i < DisplayValues.length; i++) {
    // console.log(DisplayValues[i]);
    R[i] = {
      AugLev: DisplayValues[i].AugLev.toString(),
      upgLev: DisplayValues[i].upgLev.toString(),
      exponent: DisplayValues[i].exponent.toString(),
      value: DisplayValues[i].value.toString(),
    };
  }
  return R;
}
