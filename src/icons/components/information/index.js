import InformationBold from "./InformationBold";
import InformationBroken from "./InformationBroken";
import InformationBulk from "./InformationBulk";
import InformationLinear from "./InformationLinear";
import InformationOutline from "./InformationOutline";
import InformationTwotone from "./InformationTwotone";

export { InformationBold, InformationBroken, InformationBulk, InformationLinear, InformationOutline, InformationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "information-bold",
    Component: InformationBold,
    componentName: "InformationBold",
  },
  {
    variant: "broken",
    slug: "information-broken",
    Component: InformationBroken,
    componentName: "InformationBroken",
  },
  {
    variant: "bulk",
    slug: "information-bulk",
    Component: InformationBulk,
    componentName: "InformationBulk",
  },
  {
    variant: "linear",
    slug: "information-linear",
    Component: InformationLinear,
    componentName: "InformationLinear",
  },
  {
    variant: "outline",
    slug: "information-outline",
    Component: InformationOutline,
    componentName: "InformationOutline",
  },
  {
    variant: "twotone",
    slug: "information-twotone",
    Component: InformationTwotone,
    componentName: "InformationTwotone",
  },
];
