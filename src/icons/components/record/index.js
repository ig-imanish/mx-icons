import RecordBold from "./RecordBold";
import RecordBroken from "./RecordBroken";
import RecordBulk from "./RecordBulk";
import RecordLinear from "./RecordLinear";
import RecordOutline from "./RecordOutline";
import RecordTwotone from "./RecordTwotone";

export { RecordBold, RecordBroken, RecordBulk, RecordLinear, RecordOutline, RecordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "record-bold",
    Component: RecordBold,
    componentName: "RecordBold",
  },
  {
    variant: "broken",
    slug: "record-broken",
    Component: RecordBroken,
    componentName: "RecordBroken",
  },
  {
    variant: "bulk",
    slug: "record-bulk",
    Component: RecordBulk,
    componentName: "RecordBulk",
  },
  {
    variant: "linear",
    slug: "record-linear",
    Component: RecordLinear,
    componentName: "RecordLinear",
  },
  {
    variant: "outline",
    slug: "record-outline",
    Component: RecordOutline,
    componentName: "RecordOutline",
  },
  {
    variant: "twotone",
    slug: "record-twotone",
    Component: RecordTwotone,
    componentName: "RecordTwotone",
  },
];
