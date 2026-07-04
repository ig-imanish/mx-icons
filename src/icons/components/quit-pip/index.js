import QuitPipBold from "./QuitPipBold";
import QuitPipBroken from "./QuitPipBroken";
import QuitPipBulk from "./QuitPipBulk";
import QuitPipLinear from "./QuitPipLinear";
import QuitPipOutline from "./QuitPipOutline";
import QuitPipTwotone from "./QuitPipTwotone";

export { QuitPipBold, QuitPipBroken, QuitPipBulk, QuitPipLinear, QuitPipOutline, QuitPipTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "quit-pip-bold",
    Component: QuitPipBold,
    componentName: "QuitPipBold",
  },,
  {
    variant: "broken",
    slug: "quit-pip-broken",
    Component: QuitPipBroken,
    componentName: "QuitPipBroken",
  },,
  {
    variant: "bulk",
    slug: "quit-pip-bulk",
    Component: QuitPipBulk,
    componentName: "QuitPipBulk",
  },,
  {
    variant: "linear",
    slug: "quit-pip-linear",
    Component: QuitPipLinear,
    componentName: "QuitPipLinear",
  },,
  {
    variant: "outline",
    slug: "quit-pip-outline",
    Component: QuitPipOutline,
    componentName: "QuitPipOutline",
  },,
  {
    variant: "twotone",
    slug: "quit-pip-twotone",
    Component: QuitPipTwotone,
    componentName: "QuitPipTwotone",
  }
];

export default { QuitPipBold, QuitPipBroken, QuitPipBulk, QuitPipLinear, QuitPipOutline, QuitPipTwotone };
