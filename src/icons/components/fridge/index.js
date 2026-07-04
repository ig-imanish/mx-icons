import FridgeBold from "./FridgeBold";
import FridgeBroken from "./FridgeBroken";
import FridgeBulk from "./FridgeBulk";
import FridgeLinear from "./FridgeLinear";
import FridgeOutline from "./FridgeOutline";
import FridgeTwotone from "./FridgeTwotone";

export { FridgeBold, FridgeBroken, FridgeBulk, FridgeLinear, FridgeOutline, FridgeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "fridge-bold",
    Component: FridgeBold,
    componentName: "FridgeBold",
  },,
  {
    variant: "broken",
    slug: "fridge-broken",
    Component: FridgeBroken,
    componentName: "FridgeBroken",
  },,
  {
    variant: "bulk",
    slug: "fridge-bulk",
    Component: FridgeBulk,
    componentName: "FridgeBulk",
  },,
  {
    variant: "linear",
    slug: "fridge-linear",
    Component: FridgeLinear,
    componentName: "FridgeLinear",
  },,
  {
    variant: "outline",
    slug: "fridge-outline",
    Component: FridgeOutline,
    componentName: "FridgeOutline",
  },,
  {
    variant: "twotone",
    slug: "fridge-twotone",
    Component: FridgeTwotone,
    componentName: "FridgeTwotone",
  }
];

export default { FridgeBold, FridgeBroken, FridgeBulk, FridgeLinear, FridgeOutline, FridgeTwotone };
