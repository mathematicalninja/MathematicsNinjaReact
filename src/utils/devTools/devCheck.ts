export default function devCheck(): Boolean {
  return process.env.NODE_ENV === "development";
}
