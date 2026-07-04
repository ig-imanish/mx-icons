import DisketteBold from "./DisketteBold";
import DisketteBroken from "./DisketteBroken";
import DisketteBulk from "./DisketteBulk";
import DisketteLinear from "./DisketteLinear";
import DisketteOutline from "./DisketteOutline";
import DisketteTwotone from "./DisketteTwotone";

export { DisketteBold, DisketteBroken, DisketteBulk, DisketteLinear, DisketteOutline, DisketteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "diskette-bold",
    Component: DisketteBold,
    componentName: "DisketteBold",
  },,
  {
    variant: "broken",
    slug: "diskette-broken",
    Component: DisketteBroken,
    componentName: "DisketteBroken",
  },,
  {
    variant: "bulk",
    slug: "diskette-bulk",
    Component: DisketteBulk,
    componentName: "DisketteBulk",
  },,
  {
    variant: "linear",
    slug: "diskette-linear",
    Component: DisketteLinear,
    componentName: "DisketteLinear",
  },,
  {
    variant: "outline",
    slug: "diskette-outline",
    Component: DisketteOutline,
    componentName: "DisketteOutline",
  },,
  {
    variant: "twotone",
    slug: "diskette-twotone",
    Component: DisketteTwotone,
    componentName: "DisketteTwotone",
  }
];

export default { DisketteBold, DisketteBroken, DisketteBulk, DisketteLinear, DisketteOutline, DisketteTwotone };
