import ShieldKeyholeBold from "./ShieldKeyholeBold";
import ShieldKeyholeBroken from "./ShieldKeyholeBroken";
import ShieldKeyholeBulk from "./ShieldKeyholeBulk";
import ShieldKeyholeLinear from "./ShieldKeyholeLinear";
import ShieldKeyholeOutline from "./ShieldKeyholeOutline";
import ShieldKeyholeTwotone from "./ShieldKeyholeTwotone";

export { ShieldKeyholeBold, ShieldKeyholeBroken, ShieldKeyholeBulk, ShieldKeyholeLinear, ShieldKeyholeOutline, ShieldKeyholeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-keyhole-bold",
    Component: ShieldKeyholeBold,
    componentName: "ShieldKeyholeBold",
  },,
  {
    variant: "broken",
    slug: "shield-keyhole-broken",
    Component: ShieldKeyholeBroken,
    componentName: "ShieldKeyholeBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-keyhole-bulk",
    Component: ShieldKeyholeBulk,
    componentName: "ShieldKeyholeBulk",
  },,
  {
    variant: "linear",
    slug: "shield-keyhole-linear",
    Component: ShieldKeyholeLinear,
    componentName: "ShieldKeyholeLinear",
  },,
  {
    variant: "outline",
    slug: "shield-keyhole-outline",
    Component: ShieldKeyholeOutline,
    componentName: "ShieldKeyholeOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-keyhole-twotone",
    Component: ShieldKeyholeTwotone,
    componentName: "ShieldKeyholeTwotone",
  }
];

export default { ShieldKeyholeBold, ShieldKeyholeBroken, ShieldKeyholeBulk, ShieldKeyholeLinear, ShieldKeyholeOutline, ShieldKeyholeTwotone };
