import ShieldNetworkBold from "./ShieldNetworkBold";
import ShieldNetworkBroken from "./ShieldNetworkBroken";
import ShieldNetworkBulk from "./ShieldNetworkBulk";
import ShieldNetworkLinear from "./ShieldNetworkLinear";
import ShieldNetworkOutline from "./ShieldNetworkOutline";
import ShieldNetworkTwotone from "./ShieldNetworkTwotone";

export { ShieldNetworkBold, ShieldNetworkBroken, ShieldNetworkBulk, ShieldNetworkLinear, ShieldNetworkOutline, ShieldNetworkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-network-bold",
    Component: ShieldNetworkBold,
    componentName: "ShieldNetworkBold",
  },,
  {
    variant: "broken",
    slug: "shield-network-broken",
    Component: ShieldNetworkBroken,
    componentName: "ShieldNetworkBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-network-bulk",
    Component: ShieldNetworkBulk,
    componentName: "ShieldNetworkBulk",
  },,
  {
    variant: "linear",
    slug: "shield-network-linear",
    Component: ShieldNetworkLinear,
    componentName: "ShieldNetworkLinear",
  },,
  {
    variant: "outline",
    slug: "shield-network-outline",
    Component: ShieldNetworkOutline,
    componentName: "ShieldNetworkOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-network-twotone",
    Component: ShieldNetworkTwotone,
    componentName: "ShieldNetworkTwotone",
  }
];

export default { ShieldNetworkBold, ShieldNetworkBroken, ShieldNetworkBulk, ShieldNetworkLinear, ShieldNetworkOutline, ShieldNetworkTwotone };
