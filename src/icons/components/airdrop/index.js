import AirdropBold from "./AirdropBold";
import AirdropBroken from "./AirdropBroken";
import AirdropBulk from "./AirdropBulk";
import AirdropLinear from "./AirdropLinear";
import AirdropOutline from "./AirdropOutline";
import AirdropTwotone from "./AirdropTwotone";

export { AirdropBold, AirdropBroken, AirdropBulk, AirdropLinear, AirdropOutline, AirdropTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airdrop-bold",
    Component: AirdropBold,
    componentName: "AirdropBold",
  },
  {
    variant: "broken",
    slug: "airdrop-broken",
    Component: AirdropBroken,
    componentName: "AirdropBroken",
  },
  {
    variant: "bulk",
    slug: "airdrop-bulk",
    Component: AirdropBulk,
    componentName: "AirdropBulk",
  },
  {
    variant: "linear",
    slug: "airdrop-linear",
    Component: AirdropLinear,
    componentName: "AirdropLinear",
  },
  {
    variant: "outline",
    slug: "airdrop-outline",
    Component: AirdropOutline,
    componentName: "AirdropOutline",
  },
  {
    variant: "twotone",
    slug: "airdrop-twotone",
    Component: AirdropTwotone,
    componentName: "AirdropTwotone",
  },
];
