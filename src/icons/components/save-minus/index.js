import SaveMinusBold from "./SaveMinusBold";
import SaveMinusBroken from "./SaveMinusBroken";
import SaveMinusBulk from "./SaveMinusBulk";
import SaveMinusLinear from "./SaveMinusLinear";
import SaveMinusOutline from "./SaveMinusOutline";
import SaveMinusTwotone from "./SaveMinusTwotone";

export { SaveMinusBold, SaveMinusBroken, SaveMinusBulk, SaveMinusLinear, SaveMinusOutline, SaveMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "save-minus-bold",
    Component: SaveMinusBold,
    componentName: "SaveMinusBold",
  },
  {
    variant: "broken",
    slug: "save-minus-broken",
    Component: SaveMinusBroken,
    componentName: "SaveMinusBroken",
  },
  {
    variant: "bulk",
    slug: "save-minus-bulk",
    Component: SaveMinusBulk,
    componentName: "SaveMinusBulk",
  },
  {
    variant: "linear",
    slug: "save-minus-linear",
    Component: SaveMinusLinear,
    componentName: "SaveMinusLinear",
  },
  {
    variant: "outline",
    slug: "save-minus-outline",
    Component: SaveMinusOutline,
    componentName: "SaveMinusOutline",
  },
  {
    variant: "twotone",
    slug: "save-minus-twotone",
    Component: SaveMinusTwotone,
    componentName: "SaveMinusTwotone",
  },
];
