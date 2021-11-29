export const AugmentNames: string[] = [
  "Safety Scissors",
  "Milk Infusion",
  "Cannon Implant",
  "Shoulder Mounted",
  "Energy Buster",
];
export const UpgradeNames: string[] = [
  "Danger Scissors",
  "Drinking the Milk Too",
  "Missile Launcher",
  "Actual Ammunition",
  "Charge Shot",
];

export function getLaserSword() {
  let vals: number[] = [];

  for (let i = 0; i <= 20; i++) {
    vals[i] = (110 + (i * 1 + 5)) / 100;
  }
  vals[0] = 1.1;
  vals[20] = 1.4;
  return vals;
}

export function getPowers() {
  let vals: number[] = [];

  for (let i = 0; i <= 20; i++) {
    vals[i] = (10 + (i * 1 + 5)) / 100;
  }
  return vals;
}

export const laserString = getLaserString();
function getLaserString() {
  const vals = getLaserSword();

  let strs: string[] = [];
  for (let i = 0; i <= 20; i++) {
    strs[i] = vals[i].toString();
  }
  strs[0] = "1.1";
  strs[20] = "1.40";

  return strs;
}

export function get100() {
  let strs: string[] = [];

  for (let i = 1; i <= 100; i++) {
    strs[i] = i.toString();
  }
  return strs;
}
