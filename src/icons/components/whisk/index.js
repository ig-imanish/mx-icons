import WhiskBold from "./WhiskBold";
import WhiskBroken from "./WhiskBroken";
import WhiskBulk from "./WhiskBulk";
import WhiskLinear from "./WhiskLinear";
import WhiskOutline from "./WhiskOutline";
import WhiskTwotone from "./WhiskTwotone";

export { WhiskBold, WhiskBroken, WhiskBulk, WhiskLinear, WhiskOutline, WhiskTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "whisk-bold",
    Component: WhiskBold,
    componentName: "WhiskBold",
  },,
  {
    variant: "broken",
    slug: "whisk-broken",
    Component: WhiskBroken,
    componentName: "WhiskBroken",
  },,
  {
    variant: "bulk",
    slug: "whisk-bulk",
    Component: WhiskBulk,
    componentName: "WhiskBulk",
  },,
  {
    variant: "linear",
    slug: "whisk-linear",
    Component: WhiskLinear,
    componentName: "WhiskLinear",
  },,
  {
    variant: "outline",
    slug: "whisk-outline",
    Component: WhiskOutline,
    componentName: "WhiskOutline",
  },,
  {
    variant: "twotone",
    slug: "whisk-twotone",
    Component: WhiskTwotone,
    componentName: "WhiskTwotone",
  }
];

export default { WhiskBold, WhiskBroken, WhiskBulk, WhiskLinear, WhiskOutline, WhiskTwotone };
