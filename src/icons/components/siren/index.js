import SirenBold from "./SirenBold";
import SirenBroken from "./SirenBroken";
import SirenBulk from "./SirenBulk";
import SirenLinear from "./SirenLinear";
import SirenOutline from "./SirenOutline";
import SirenTwotone from "./SirenTwotone";

export { SirenBold, SirenBroken, SirenBulk, SirenLinear, SirenOutline, SirenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "siren-bold",
    Component: SirenBold,
    componentName: "SirenBold",
  },,
  {
    variant: "broken",
    slug: "siren-broken",
    Component: SirenBroken,
    componentName: "SirenBroken",
  },,
  {
    variant: "bulk",
    slug: "siren-bulk",
    Component: SirenBulk,
    componentName: "SirenBulk",
  },,
  {
    variant: "linear",
    slug: "siren-linear",
    Component: SirenLinear,
    componentName: "SirenLinear",
  },,
  {
    variant: "outline",
    slug: "siren-outline",
    Component: SirenOutline,
    componentName: "SirenOutline",
  },,
  {
    variant: "twotone",
    slug: "siren-twotone",
    Component: SirenTwotone,
    componentName: "SirenTwotone",
  }
];

export default { SirenBold, SirenBroken, SirenBulk, SirenLinear, SirenOutline, SirenTwotone };
