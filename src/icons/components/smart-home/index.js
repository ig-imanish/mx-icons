import SmartHomeBold from "./SmartHomeBold";
import SmartHomeBroken from "./SmartHomeBroken";
import SmartHomeBulk from "./SmartHomeBulk";
import SmartHomeLinear from "./SmartHomeLinear";
import SmartHomeOutline from "./SmartHomeOutline";
import SmartHomeTwotone from "./SmartHomeTwotone";

export { SmartHomeBold, SmartHomeBroken, SmartHomeBulk, SmartHomeLinear, SmartHomeOutline, SmartHomeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smart-home-bold",
    Component: SmartHomeBold,
    componentName: "SmartHomeBold",
  },
  {
    variant: "broken",
    slug: "smart-home-broken",
    Component: SmartHomeBroken,
    componentName: "SmartHomeBroken",
  },
  {
    variant: "bulk",
    slug: "smart-home-bulk",
    Component: SmartHomeBulk,
    componentName: "SmartHomeBulk",
  },
  {
    variant: "linear",
    slug: "smart-home-linear",
    Component: SmartHomeLinear,
    componentName: "SmartHomeLinear",
  },
  {
    variant: "outline",
    slug: "smart-home-outline",
    Component: SmartHomeOutline,
    componentName: "SmartHomeOutline",
  },
  {
    variant: "twotone",
    slug: "smart-home-twotone",
    Component: SmartHomeTwotone,
    componentName: "SmartHomeTwotone",
  },
];
