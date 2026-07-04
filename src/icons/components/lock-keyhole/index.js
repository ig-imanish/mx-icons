import LockKeyholeBold from "./LockKeyholeBold";
import LockKeyholeBroken from "./LockKeyholeBroken";
import LockKeyholeBulk from "./LockKeyholeBulk";
import LockKeyholeLinear from "./LockKeyholeLinear";
import LockKeyholeOutline from "./LockKeyholeOutline";
import LockKeyholeTwotone from "./LockKeyholeTwotone";

export { LockKeyholeBold, LockKeyholeBroken, LockKeyholeBulk, LockKeyholeLinear, LockKeyholeOutline, LockKeyholeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock-keyhole-bold",
    Component: LockKeyholeBold,
    componentName: "LockKeyholeBold",
  },,
  {
    variant: "broken",
    slug: "lock-keyhole-broken",
    Component: LockKeyholeBroken,
    componentName: "LockKeyholeBroken",
  },,
  {
    variant: "bulk",
    slug: "lock-keyhole-bulk",
    Component: LockKeyholeBulk,
    componentName: "LockKeyholeBulk",
  },,
  {
    variant: "linear",
    slug: "lock-keyhole-linear",
    Component: LockKeyholeLinear,
    componentName: "LockKeyholeLinear",
  },,
  {
    variant: "outline",
    slug: "lock-keyhole-outline",
    Component: LockKeyholeOutline,
    componentName: "LockKeyholeOutline",
  },,
  {
    variant: "twotone",
    slug: "lock-keyhole-twotone",
    Component: LockKeyholeTwotone,
    componentName: "LockKeyholeTwotone",
  }
];

export default { LockKeyholeBold, LockKeyholeBroken, LockKeyholeBulk, LockKeyholeLinear, LockKeyholeOutline, LockKeyholeTwotone };
