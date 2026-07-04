import RugbyBold from "./RugbyBold";
import RugbyBroken from "./RugbyBroken";
import RugbyBulk from "./RugbyBulk";
import RugbyLinear from "./RugbyLinear";
import RugbyOutline from "./RugbyOutline";
import RugbyTwotone from "./RugbyTwotone";

export { RugbyBold, RugbyBroken, RugbyBulk, RugbyLinear, RugbyOutline, RugbyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rugby-bold",
    Component: RugbyBold,
    componentName: "RugbyBold",
  },,
  {
    variant: "broken",
    slug: "rugby-broken",
    Component: RugbyBroken,
    componentName: "RugbyBroken",
  },,
  {
    variant: "bulk",
    slug: "rugby-bulk",
    Component: RugbyBulk,
    componentName: "RugbyBulk",
  },,
  {
    variant: "linear",
    slug: "rugby-linear",
    Component: RugbyLinear,
    componentName: "RugbyLinear",
  },,
  {
    variant: "outline",
    slug: "rugby-outline",
    Component: RugbyOutline,
    componentName: "RugbyOutline",
  },,
  {
    variant: "twotone",
    slug: "rugby-twotone",
    Component: RugbyTwotone,
    componentName: "RugbyTwotone",
  }
];

export default { RugbyBold, RugbyBroken, RugbyBulk, RugbyLinear, RugbyOutline, RugbyTwotone };
