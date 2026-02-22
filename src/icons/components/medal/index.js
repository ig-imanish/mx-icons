import MedalBold from "./MedalBold";
import MedalBroken from "./MedalBroken";
import MedalBulk from "./MedalBulk";
import MedalLinear from "./MedalLinear";
import MedalOutline from "./MedalOutline";
import MedalTwotone from "./MedalTwotone";

export { MedalBold, MedalBroken, MedalBulk, MedalLinear, MedalOutline, MedalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medal-bold",
    Component: MedalBold,
    componentName: "MedalBold",
  },
  {
    variant: "broken",
    slug: "medal-broken",
    Component: MedalBroken,
    componentName: "MedalBroken",
  },
  {
    variant: "bulk",
    slug: "medal-bulk",
    Component: MedalBulk,
    componentName: "MedalBulk",
  },
  {
    variant: "linear",
    slug: "medal-linear",
    Component: MedalLinear,
    componentName: "MedalLinear",
  },
  {
    variant: "outline",
    slug: "medal-outline",
    Component: MedalOutline,
    componentName: "MedalOutline",
  },
  {
    variant: "twotone",
    slug: "medal-twotone",
    Component: MedalTwotone,
    componentName: "MedalTwotone",
  },
];
