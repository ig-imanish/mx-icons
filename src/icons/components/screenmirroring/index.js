import ScreenmirroringBold from "./ScreenmirroringBold";
import ScreenmirroringBroken from "./ScreenmirroringBroken";
import ScreenmirroringBulk from "./ScreenmirroringBulk";
import ScreenmirroringLinear from "./ScreenmirroringLinear";
import ScreenmirroringOutline from "./ScreenmirroringOutline";
import ScreenmirroringTwotone from "./ScreenmirroringTwotone";

export { ScreenmirroringBold, ScreenmirroringBroken, ScreenmirroringBulk, ScreenmirroringLinear, ScreenmirroringOutline, ScreenmirroringTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "screenmirroring-bold",
    Component: ScreenmirroringBold,
    componentName: "ScreenmirroringBold",
  },
  {
    variant: "broken",
    slug: "screenmirroring-broken",
    Component: ScreenmirroringBroken,
    componentName: "ScreenmirroringBroken",
  },
  {
    variant: "bulk",
    slug: "screenmirroring-bulk",
    Component: ScreenmirroringBulk,
    componentName: "ScreenmirroringBulk",
  },
  {
    variant: "linear",
    slug: "screenmirroring-linear",
    Component: ScreenmirroringLinear,
    componentName: "ScreenmirroringLinear",
  },
  {
    variant: "outline",
    slug: "screenmirroring-outline",
    Component: ScreenmirroringOutline,
    componentName: "ScreenmirroringOutline",
  },
  {
    variant: "twotone",
    slug: "screenmirroring-twotone",
    Component: ScreenmirroringTwotone,
    componentName: "ScreenmirroringTwotone",
  },
];
