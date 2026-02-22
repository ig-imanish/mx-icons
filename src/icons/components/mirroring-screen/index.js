import MirroringScreenBold from "./MirroringScreenBold";
import MirroringScreenBroken from "./MirroringScreenBroken";
import MirroringScreenBulk from "./MirroringScreenBulk";
import MirroringScreenLinear from "./MirroringScreenLinear";
import MirroringScreenOutline from "./MirroringScreenOutline";
import MirroringScreenTwotone from "./MirroringScreenTwotone";

export { MirroringScreenBold, MirroringScreenBroken, MirroringScreenBulk, MirroringScreenLinear, MirroringScreenOutline, MirroringScreenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mirroring-screen-bold",
    Component: MirroringScreenBold,
    componentName: "MirroringScreenBold",
  },
  {
    variant: "broken",
    slug: "mirroring-screen-broken",
    Component: MirroringScreenBroken,
    componentName: "MirroringScreenBroken",
  },
  {
    variant: "bulk",
    slug: "mirroring-screen-bulk",
    Component: MirroringScreenBulk,
    componentName: "MirroringScreenBulk",
  },
  {
    variant: "linear",
    slug: "mirroring-screen-linear",
    Component: MirroringScreenLinear,
    componentName: "MirroringScreenLinear",
  },
  {
    variant: "outline",
    slug: "mirroring-screen-outline",
    Component: MirroringScreenOutline,
    componentName: "MirroringScreenOutline",
  },
  {
    variant: "twotone",
    slug: "mirroring-screen-twotone",
    Component: MirroringScreenTwotone,
    componentName: "MirroringScreenTwotone",
  },
];
