import BedsideTableBold from "./BedsideTableBold";
import BedsideTableBroken from "./BedsideTableBroken";
import BedsideTableBulk from "./BedsideTableBulk";
import BedsideTableLinear from "./BedsideTableLinear";
import BedsideTableOutline from "./BedsideTableOutline";
import BedsideTableTwotone from "./BedsideTableTwotone";

export { BedsideTableBold, BedsideTableBroken, BedsideTableBulk, BedsideTableLinear, BedsideTableOutline, BedsideTableTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bedside-table-bold",
    Component: BedsideTableBold,
    componentName: "BedsideTableBold",
  },,
  {
    variant: "broken",
    slug: "bedside-table-broken",
    Component: BedsideTableBroken,
    componentName: "BedsideTableBroken",
  },,
  {
    variant: "bulk",
    slug: "bedside-table-bulk",
    Component: BedsideTableBulk,
    componentName: "BedsideTableBulk",
  },,
  {
    variant: "linear",
    slug: "bedside-table-linear",
    Component: BedsideTableLinear,
    componentName: "BedsideTableLinear",
  },,
  {
    variant: "outline",
    slug: "bedside-table-outline",
    Component: BedsideTableOutline,
    componentName: "BedsideTableOutline",
  },,
  {
    variant: "twotone",
    slug: "bedside-table-twotone",
    Component: BedsideTableTwotone,
    componentName: "BedsideTableTwotone",
  }
];

export default { BedsideTableBold, BedsideTableBroken, BedsideTableBulk, BedsideTableLinear, BedsideTableOutline, BedsideTableTwotone };
