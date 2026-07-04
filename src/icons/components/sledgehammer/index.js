import SledgehammerBold from "./SledgehammerBold";
import SledgehammerBroken from "./SledgehammerBroken";
import SledgehammerBulk from "./SledgehammerBulk";
import SledgehammerLinear from "./SledgehammerLinear";
import SledgehammerOutline from "./SledgehammerOutline";
import SledgehammerTwotone from "./SledgehammerTwotone";

export { SledgehammerBold, SledgehammerBroken, SledgehammerBulk, SledgehammerLinear, SledgehammerOutline, SledgehammerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sledgehammer-bold",
    Component: SledgehammerBold,
    componentName: "SledgehammerBold",
  },,
  {
    variant: "broken",
    slug: "sledgehammer-broken",
    Component: SledgehammerBroken,
    componentName: "SledgehammerBroken",
  },,
  {
    variant: "bulk",
    slug: "sledgehammer-bulk",
    Component: SledgehammerBulk,
    componentName: "SledgehammerBulk",
  },,
  {
    variant: "linear",
    slug: "sledgehammer-linear",
    Component: SledgehammerLinear,
    componentName: "SledgehammerLinear",
  },,
  {
    variant: "outline",
    slug: "sledgehammer-outline",
    Component: SledgehammerOutline,
    componentName: "SledgehammerOutline",
  },,
  {
    variant: "twotone",
    slug: "sledgehammer-twotone",
    Component: SledgehammerTwotone,
    componentName: "SledgehammerTwotone",
  }
];

export default { SledgehammerBold, SledgehammerBroken, SledgehammerBulk, SledgehammerLinear, SledgehammerOutline, SledgehammerTwotone };
