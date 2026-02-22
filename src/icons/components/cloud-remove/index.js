import CloudRemoveBold from "./CloudRemoveBold";
import CloudRemoveBroken from "./CloudRemoveBroken";
import CloudRemoveBulk from "./CloudRemoveBulk";
import CloudRemoveLinear from "./CloudRemoveLinear";
import CloudRemoveOutline from "./CloudRemoveOutline";
import CloudRemoveTwotone from "./CloudRemoveTwotone";

export { CloudRemoveBold, CloudRemoveBroken, CloudRemoveBulk, CloudRemoveLinear, CloudRemoveOutline, CloudRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-remove-bold",
    Component: CloudRemoveBold,
    componentName: "CloudRemoveBold",
  },
  {
    variant: "broken",
    slug: "cloud-remove-broken",
    Component: CloudRemoveBroken,
    componentName: "CloudRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-remove-bulk",
    Component: CloudRemoveBulk,
    componentName: "CloudRemoveBulk",
  },
  {
    variant: "linear",
    slug: "cloud-remove-linear",
    Component: CloudRemoveLinear,
    componentName: "CloudRemoveLinear",
  },
  {
    variant: "outline",
    slug: "cloud-remove-outline",
    Component: CloudRemoveOutline,
    componentName: "CloudRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-remove-twotone",
    Component: CloudRemoveTwotone,
    componentName: "CloudRemoveTwotone",
  },
];
