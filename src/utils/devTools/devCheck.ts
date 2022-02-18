export default function devCheck(): Boolean {
  // return false;
  return process.env.NODE_ENV === "development";
}
