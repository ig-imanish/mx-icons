import AttachCircleBold from "./AttachCircleBold";
import AttachCircleBroken from "./AttachCircleBroken";
import AttachCircleBulk from "./AttachCircleBulk";
import AttachCircleLinear from "./AttachCircleLinear";
import AttachCircleOutline from "./AttachCircleOutline";
import AttachCircleTwotone from "./AttachCircleTwotone";

export { AttachCircleBold, AttachCircleBroken, AttachCircleBulk, AttachCircleLinear, AttachCircleOutline, AttachCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "attach-circle-bold",
    Component: AttachCircleBold,
    componentName: "AttachCircleBold",
  },
  {
    variant: "broken",
    slug: "attach-circle-broken",
    Component: AttachCircleBroken,
    componentName: "AttachCircleBroken",
  },
  {
    variant: "bulk",
    slug: "attach-circle-bulk",
    Component: AttachCircleBulk,
    componentName: "AttachCircleBulk",
  },
  {
    variant: "linear",
    slug: "attach-circle-linear",
    Component: AttachCircleLinear,
    componentName: "AttachCircleLinear",
  },
  {
    variant: "outline",
    slug: "attach-circle-outline",
    Component: AttachCircleOutline,
    componentName: "AttachCircleOutline",
  },
  {
    variant: "twotone",
    slug: "attach-circle-twotone",
    Component: AttachCircleTwotone,
    componentName: "AttachCircleTwotone",
  },
];
