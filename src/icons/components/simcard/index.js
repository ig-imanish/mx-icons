import SimcardBold from "./SimcardBold";
import SimcardBroken from "./SimcardBroken";
import SimcardBulk from "./SimcardBulk";
import SimcardLinear from "./SimcardLinear";
import SimcardOutline from "./SimcardOutline";
import SimcardTwotone from "./SimcardTwotone";

export { SimcardBold, SimcardBroken, SimcardBulk, SimcardLinear, SimcardOutline, SimcardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "simcard-bold",
    Component: SimcardBold,
    componentName: "SimcardBold",
  },
  {
    variant: "broken",
    slug: "simcard-broken",
    Component: SimcardBroken,
    componentName: "SimcardBroken",
  },
  {
    variant: "bulk",
    slug: "simcard-bulk",
    Component: SimcardBulk,
    componentName: "SimcardBulk",
  },
  {
    variant: "linear",
    slug: "simcard-linear",
    Component: SimcardLinear,
    componentName: "SimcardLinear",
  },
  {
    variant: "outline",
    slug: "simcard-outline",
    Component: SimcardOutline,
    componentName: "SimcardOutline",
  },
  {
    variant: "twotone",
    slug: "simcard-twotone",
    Component: SimcardTwotone,
    componentName: "SimcardTwotone",
  },
];
