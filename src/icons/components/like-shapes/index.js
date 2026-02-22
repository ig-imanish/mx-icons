import LikeShapesBold from "./LikeShapesBold";
import LikeShapesBroken from "./LikeShapesBroken";
import LikeShapesBulk from "./LikeShapesBulk";
import LikeShapesLinear from "./LikeShapesLinear";
import LikeShapesOutline from "./LikeShapesOutline";
import LikeShapesTwotone from "./LikeShapesTwotone";

export { LikeShapesBold, LikeShapesBroken, LikeShapesBulk, LikeShapesLinear, LikeShapesOutline, LikeShapesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "like-shapes-bold",
    Component: LikeShapesBold,
    componentName: "LikeShapesBold",
  },
  {
    variant: "broken",
    slug: "like-shapes-broken",
    Component: LikeShapesBroken,
    componentName: "LikeShapesBroken",
  },
  {
    variant: "bulk",
    slug: "like-shapes-bulk",
    Component: LikeShapesBulk,
    componentName: "LikeShapesBulk",
  },
  {
    variant: "linear",
    slug: "like-shapes-linear",
    Component: LikeShapesLinear,
    componentName: "LikeShapesLinear",
  },
  {
    variant: "outline",
    slug: "like-shapes-outline",
    Component: LikeShapesOutline,
    componentName: "LikeShapesOutline",
  },
  {
    variant: "twotone",
    slug: "like-shapes-twotone",
    Component: LikeShapesTwotone,
    componentName: "LikeShapesTwotone",
  },
];
