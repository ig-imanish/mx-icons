import ObjectScanBold from "./ObjectScanBold";
import ObjectScanBroken from "./ObjectScanBroken";
import ObjectScanBulk from "./ObjectScanBulk";
import ObjectScanLinear from "./ObjectScanLinear";
import ObjectScanOutline from "./ObjectScanOutline";
import ObjectScanTwotone from "./ObjectScanTwotone";

export { ObjectScanBold, ObjectScanBroken, ObjectScanBulk, ObjectScanLinear, ObjectScanOutline, ObjectScanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "object-scan-bold",
    Component: ObjectScanBold,
    componentName: "ObjectScanBold",
  },,
  {
    variant: "broken",
    slug: "object-scan-broken",
    Component: ObjectScanBroken,
    componentName: "ObjectScanBroken",
  },,
  {
    variant: "bulk",
    slug: "object-scan-bulk",
    Component: ObjectScanBulk,
    componentName: "ObjectScanBulk",
  },,
  {
    variant: "linear",
    slug: "object-scan-linear",
    Component: ObjectScanLinear,
    componentName: "ObjectScanLinear",
  },,
  {
    variant: "outline",
    slug: "object-scan-outline",
    Component: ObjectScanOutline,
    componentName: "ObjectScanOutline",
  },,
  {
    variant: "twotone",
    slug: "object-scan-twotone",
    Component: ObjectScanTwotone,
    componentName: "ObjectScanTwotone",
  }
];

export default { ObjectScanBold, ObjectScanBroken, ObjectScanBulk, ObjectScanLinear, ObjectScanOutline, ObjectScanTwotone };
