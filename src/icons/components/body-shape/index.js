import BodyShapeBold from "./BodyShapeBold";
import BodyShapeBroken from "./BodyShapeBroken";
import BodyShapeBulk from "./BodyShapeBulk";
import BodyShapeLinear from "./BodyShapeLinear";
import BodyShapeOutline from "./BodyShapeOutline";
import BodyShapeTwotone from "./BodyShapeTwotone";

export { BodyShapeBold, BodyShapeBroken, BodyShapeBulk, BodyShapeLinear, BodyShapeOutline, BodyShapeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "body-shape-bold",
    Component: BodyShapeBold,
    componentName: "BodyShapeBold",
  },,
  {
    variant: "broken",
    slug: "body-shape-broken",
    Component: BodyShapeBroken,
    componentName: "BodyShapeBroken",
  },,
  {
    variant: "bulk",
    slug: "body-shape-bulk",
    Component: BodyShapeBulk,
    componentName: "BodyShapeBulk",
  },,
  {
    variant: "linear",
    slug: "body-shape-linear",
    Component: BodyShapeLinear,
    componentName: "BodyShapeLinear",
  },,
  {
    variant: "outline",
    slug: "body-shape-outline",
    Component: BodyShapeOutline,
    componentName: "BodyShapeOutline",
  },,
  {
    variant: "twotone",
    slug: "body-shape-twotone",
    Component: BodyShapeTwotone,
    componentName: "BodyShapeTwotone",
  }
];

export default { BodyShapeBold, BodyShapeBroken, BodyShapeBulk, BodyShapeLinear, BodyShapeOutline, BodyShapeTwotone };
