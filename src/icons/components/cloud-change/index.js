import CloudChangeBold from "./CloudChangeBold";
import CloudChangeBroken from "./CloudChangeBroken";
import CloudChangeBulk from "./CloudChangeBulk";
import CloudChangeLinear from "./CloudChangeLinear";
import CloudChangeOutline from "./CloudChangeOutline";
import CloudChangeTwotone from "./CloudChangeTwotone";

export { CloudChangeBold, CloudChangeBroken, CloudChangeBulk, CloudChangeLinear, CloudChangeOutline, CloudChangeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-change-bold",
    Component: CloudChangeBold,
    componentName: "CloudChangeBold",
  },
  {
    variant: "broken",
    slug: "cloud-change-broken",
    Component: CloudChangeBroken,
    componentName: "CloudChangeBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-change-bulk",
    Component: CloudChangeBulk,
    componentName: "CloudChangeBulk",
  },
  {
    variant: "linear",
    slug: "cloud-change-linear",
    Component: CloudChangeLinear,
    componentName: "CloudChangeLinear",
  },
  {
    variant: "outline",
    slug: "cloud-change-outline",
    Component: CloudChangeOutline,
    componentName: "CloudChangeOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-change-twotone",
    Component: CloudChangeTwotone,
    componentName: "CloudChangeTwotone",
  },
];
