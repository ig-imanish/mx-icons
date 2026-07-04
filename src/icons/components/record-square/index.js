import RecordSquareBold from "./RecordSquareBold";
import RecordSquareBroken from "./RecordSquareBroken";
import RecordSquareBulk from "./RecordSquareBulk";
import RecordSquareLinear from "./RecordSquareLinear";
import RecordSquareOutline from "./RecordSquareOutline";
import RecordSquareTwotone from "./RecordSquareTwotone";

export { RecordSquareBold, RecordSquareBroken, RecordSquareBulk, RecordSquareLinear, RecordSquareOutline, RecordSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "record-square-bold",
    Component: RecordSquareBold,
    componentName: "RecordSquareBold",
  },,
  {
    variant: "broken",
    slug: "record-square-broken",
    Component: RecordSquareBroken,
    componentName: "RecordSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "record-square-bulk",
    Component: RecordSquareBulk,
    componentName: "RecordSquareBulk",
  },,
  {
    variant: "linear",
    slug: "record-square-linear",
    Component: RecordSquareLinear,
    componentName: "RecordSquareLinear",
  },,
  {
    variant: "outline",
    slug: "record-square-outline",
    Component: RecordSquareOutline,
    componentName: "RecordSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "record-square-twotone",
    Component: RecordSquareTwotone,
    componentName: "RecordSquareTwotone",
  }
];

export default { RecordSquareBold, RecordSquareBroken, RecordSquareBulk, RecordSquareLinear, RecordSquareOutline, RecordSquareTwotone };
