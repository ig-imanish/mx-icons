import SmallcapsBold from "./SmallcapsBold";
import SmallcapsBroken from "./SmallcapsBroken";
import SmallcapsBulk from "./SmallcapsBulk";
import SmallcapsLinear from "./SmallcapsLinear";
import SmallcapsOutline from "./SmallcapsOutline";
import SmallcapsTwotone from "./SmallcapsTwotone";

export { SmallcapsBold, SmallcapsBroken, SmallcapsBulk, SmallcapsLinear, SmallcapsOutline, SmallcapsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smallcaps-bold",
    Component: SmallcapsBold,
    componentName: "SmallcapsBold",
  },
  {
    variant: "broken",
    slug: "smallcaps-broken",
    Component: SmallcapsBroken,
    componentName: "SmallcapsBroken",
  },
  {
    variant: "bulk",
    slug: "smallcaps-bulk",
    Component: SmallcapsBulk,
    componentName: "SmallcapsBulk",
  },
  {
    variant: "linear",
    slug: "smallcaps-linear",
    Component: SmallcapsLinear,
    componentName: "SmallcapsLinear",
  },
  {
    variant: "outline",
    slug: "smallcaps-outline",
    Component: SmallcapsOutline,
    componentName: "SmallcapsOutline",
  },
  {
    variant: "twotone",
    slug: "smallcaps-twotone",
    Component: SmallcapsTwotone,
    componentName: "SmallcapsTwotone",
  },
];
