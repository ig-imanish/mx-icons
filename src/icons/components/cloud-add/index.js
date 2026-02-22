import CloudAddBold from "./CloudAddBold";
import CloudAddBroken from "./CloudAddBroken";
import CloudAddBulk from "./CloudAddBulk";
import CloudAddLinear from "./CloudAddLinear";
import CloudAddOutline from "./CloudAddOutline";
import CloudAddTwotone from "./CloudAddTwotone";

export { CloudAddBold, CloudAddBroken, CloudAddBulk, CloudAddLinear, CloudAddOutline, CloudAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-add-bold",
    Component: CloudAddBold,
    componentName: "CloudAddBold",
  },
  {
    variant: "broken",
    slug: "cloud-add-broken",
    Component: CloudAddBroken,
    componentName: "CloudAddBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-add-bulk",
    Component: CloudAddBulk,
    componentName: "CloudAddBulk",
  },
  {
    variant: "linear",
    slug: "cloud-add-linear",
    Component: CloudAddLinear,
    componentName: "CloudAddLinear",
  },
  {
    variant: "outline",
    slug: "cloud-add-outline",
    Component: CloudAddOutline,
    componentName: "CloudAddOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-add-twotone",
    Component: CloudAddTwotone,
    componentName: "CloudAddTwotone",
  },
];
