import CloudConnectionBold from "./CloudConnectionBold";
import CloudConnectionBroken from "./CloudConnectionBroken";
import CloudConnectionBulk from "./CloudConnectionBulk";
import CloudConnectionLinear from "./CloudConnectionLinear";
import CloudConnectionOutline from "./CloudConnectionOutline";
import CloudConnectionTwotone from "./CloudConnectionTwotone";

export { CloudConnectionBold, CloudConnectionBroken, CloudConnectionBulk, CloudConnectionLinear, CloudConnectionOutline, CloudConnectionTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-connection-bold",
    Component: CloudConnectionBold,
    componentName: "CloudConnectionBold",
  },
  {
    variant: "broken",
    slug: "cloud-connection-broken",
    Component: CloudConnectionBroken,
    componentName: "CloudConnectionBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-connection-bulk",
    Component: CloudConnectionBulk,
    componentName: "CloudConnectionBulk",
  },
  {
    variant: "linear",
    slug: "cloud-connection-linear",
    Component: CloudConnectionLinear,
    componentName: "CloudConnectionLinear",
  },
  {
    variant: "outline",
    slug: "cloud-connection-outline",
    Component: CloudConnectionOutline,
    componentName: "CloudConnectionOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-connection-twotone",
    Component: CloudConnectionTwotone,
    componentName: "CloudConnectionTwotone",
  },
];
