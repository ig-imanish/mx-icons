import AttachSquareBold from "./AttachSquareBold";
import AttachSquareBroken from "./AttachSquareBroken";
import AttachSquareBulk from "./AttachSquareBulk";
import AttachSquareLinear from "./AttachSquareLinear";
import AttachSquareOutline from "./AttachSquareOutline";
import AttachSquareTwotone from "./AttachSquareTwotone";

export { AttachSquareBold, AttachSquareBroken, AttachSquareBulk, AttachSquareLinear, AttachSquareOutline, AttachSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "attach-square-bold",
    Component: AttachSquareBold,
    componentName: "AttachSquareBold",
  },
  {
    variant: "broken",
    slug: "attach-square-broken",
    Component: AttachSquareBroken,
    componentName: "AttachSquareBroken",
  },
  {
    variant: "bulk",
    slug: "attach-square-bulk",
    Component: AttachSquareBulk,
    componentName: "AttachSquareBulk",
  },
  {
    variant: "linear",
    slug: "attach-square-linear",
    Component: AttachSquareLinear,
    componentName: "AttachSquareLinear",
  },
  {
    variant: "outline",
    slug: "attach-square-outline",
    Component: AttachSquareOutline,
    componentName: "AttachSquareOutline",
  },
  {
    variant: "twotone",
    slug: "attach-square-twotone",
    Component: AttachSquareTwotone,
    componentName: "AttachSquareTwotone",
  },
];
