import ClosetBold from "./ClosetBold";
import ClosetBroken from "./ClosetBroken";
import ClosetBulk from "./ClosetBulk";
import ClosetLinear from "./ClosetLinear";
import ClosetOutline from "./ClosetOutline";
import ClosetTwotone from "./ClosetTwotone";

export { ClosetBold, ClosetBroken, ClosetBulk, ClosetLinear, ClosetOutline, ClosetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "closet-bold",
    Component: ClosetBold,
    componentName: "ClosetBold",
  },,
  {
    variant: "broken",
    slug: "closet-broken",
    Component: ClosetBroken,
    componentName: "ClosetBroken",
  },,
  {
    variant: "bulk",
    slug: "closet-bulk",
    Component: ClosetBulk,
    componentName: "ClosetBulk",
  },,
  {
    variant: "linear",
    slug: "closet-linear",
    Component: ClosetLinear,
    componentName: "ClosetLinear",
  },,
  {
    variant: "outline",
    slug: "closet-outline",
    Component: ClosetOutline,
    componentName: "ClosetOutline",
  },,
  {
    variant: "twotone",
    slug: "closet-twotone",
    Component: ClosetTwotone,
    componentName: "ClosetTwotone",
  }
];

export default { ClosetBold, ClosetBroken, ClosetBulk, ClosetLinear, ClosetOutline, ClosetTwotone };
