import CosmeticBold from "./CosmeticBold";
import CosmeticBroken from "./CosmeticBroken";
import CosmeticBulk from "./CosmeticBulk";
import CosmeticLinear from "./CosmeticLinear";
import CosmeticOutline from "./CosmeticOutline";
import CosmeticTwotone from "./CosmeticTwotone";

export { CosmeticBold, CosmeticBroken, CosmeticBulk, CosmeticLinear, CosmeticOutline, CosmeticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cosmetic-bold",
    Component: CosmeticBold,
    componentName: "CosmeticBold",
  },,
  {
    variant: "broken",
    slug: "cosmetic-broken",
    Component: CosmeticBroken,
    componentName: "CosmeticBroken",
  },,
  {
    variant: "bulk",
    slug: "cosmetic-bulk",
    Component: CosmeticBulk,
    componentName: "CosmeticBulk",
  },,
  {
    variant: "linear",
    slug: "cosmetic-linear",
    Component: CosmeticLinear,
    componentName: "CosmeticLinear",
  },,
  {
    variant: "outline",
    slug: "cosmetic-outline",
    Component: CosmeticOutline,
    componentName: "CosmeticOutline",
  },,
  {
    variant: "twotone",
    slug: "cosmetic-twotone",
    Component: CosmeticTwotone,
    componentName: "CosmeticTwotone",
  }
];

export default { CosmeticBold, CosmeticBroken, CosmeticBulk, CosmeticLinear, CosmeticOutline, CosmeticTwotone };
