import QuitFullScreenBold from "./QuitFullScreenBold";
import QuitFullScreenBroken from "./QuitFullScreenBroken";
import QuitFullScreenBulk from "./QuitFullScreenBulk";
import QuitFullScreenLinear from "./QuitFullScreenLinear";
import QuitFullScreenOutline from "./QuitFullScreenOutline";
import QuitFullScreenTwotone from "./QuitFullScreenTwotone";

export { QuitFullScreenBold, QuitFullScreenBroken, QuitFullScreenBulk, QuitFullScreenLinear, QuitFullScreenOutline, QuitFullScreenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "quit-full-screen-bold",
    Component: QuitFullScreenBold,
    componentName: "QuitFullScreenBold",
  },,
  {
    variant: "broken",
    slug: "quit-full-screen-broken",
    Component: QuitFullScreenBroken,
    componentName: "QuitFullScreenBroken",
  },,
  {
    variant: "bulk",
    slug: "quit-full-screen-bulk",
    Component: QuitFullScreenBulk,
    componentName: "QuitFullScreenBulk",
  },,
  {
    variant: "linear",
    slug: "quit-full-screen-linear",
    Component: QuitFullScreenLinear,
    componentName: "QuitFullScreenLinear",
  },,
  {
    variant: "outline",
    slug: "quit-full-screen-outline",
    Component: QuitFullScreenOutline,
    componentName: "QuitFullScreenOutline",
  },,
  {
    variant: "twotone",
    slug: "quit-full-screen-twotone",
    Component: QuitFullScreenTwotone,
    componentName: "QuitFullScreenTwotone",
  }
];

export default { QuitFullScreenBold, QuitFullScreenBroken, QuitFullScreenBulk, QuitFullScreenLinear, QuitFullScreenOutline, QuitFullScreenTwotone };
