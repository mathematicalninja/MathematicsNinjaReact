import devCheck from "./devCheck";

export function devLog(...args) {
  if (!devCheck()) {
    return;
  }
  console.log(...args);
}
