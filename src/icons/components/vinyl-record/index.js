import VinylRecordBold from "./VinylRecordBold";
import VinylRecordBroken from "./VinylRecordBroken";
import VinylRecordBulk from "./VinylRecordBulk";
import VinylRecordLinear from "./VinylRecordLinear";
import VinylRecordOutline from "./VinylRecordOutline";
import VinylRecordTwotone from "./VinylRecordTwotone";

export { VinylRecordBold, VinylRecordBroken, VinylRecordBulk, VinylRecordLinear, VinylRecordOutline, VinylRecordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "vinyl-record-bold",
    Component: VinylRecordBold,
    componentName: "VinylRecordBold",
  },,
  {
    variant: "broken",
    slug: "vinyl-record-broken",
    Component: VinylRecordBroken,
    componentName: "VinylRecordBroken",
  },,
  {
    variant: "bulk",
    slug: "vinyl-record-bulk",
    Component: VinylRecordBulk,
    componentName: "VinylRecordBulk",
  },,
  {
    variant: "linear",
    slug: "vinyl-record-linear",
    Component: VinylRecordLinear,
    componentName: "VinylRecordLinear",
  },,
  {
    variant: "outline",
    slug: "vinyl-record-outline",
    Component: VinylRecordOutline,
    componentName: "VinylRecordOutline",
  },,
  {
    variant: "twotone",
    slug: "vinyl-record-twotone",
    Component: VinylRecordTwotone,
    componentName: "VinylRecordTwotone",
  }
];

export default { VinylRecordBold, VinylRecordBroken, VinylRecordBulk, VinylRecordLinear, VinylRecordOutline, VinylRecordTwotone };
