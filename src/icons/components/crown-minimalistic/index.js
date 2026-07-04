import CrownMinimalisticBold from "./CrownMinimalisticBold";
import CrownMinimalisticBroken from "./CrownMinimalisticBroken";
import CrownMinimalisticBulk from "./CrownMinimalisticBulk";
import CrownMinimalisticLinear from "./CrownMinimalisticLinear";
import CrownMinimalisticOutline from "./CrownMinimalisticOutline";
import CrownMinimalisticTwotone from "./CrownMinimalisticTwotone";

export { CrownMinimalisticBold, CrownMinimalisticBroken, CrownMinimalisticBulk, CrownMinimalisticLinear, CrownMinimalisticOutline, CrownMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "crown-minimalistic-bold",
    Component: CrownMinimalisticBold,
    componentName: "CrownMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "crown-minimalistic-broken",
    Component: CrownMinimalisticBroken,
    componentName: "CrownMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "crown-minimalistic-bulk",
    Component: CrownMinimalisticBulk,
    componentName: "CrownMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "crown-minimalistic-linear",
    Component: CrownMinimalisticLinear,
    componentName: "CrownMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "crown-minimalistic-outline",
    Component: CrownMinimalisticOutline,
    componentName: "CrownMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "crown-minimalistic-twotone",
    Component: CrownMinimalisticTwotone,
    componentName: "CrownMinimalisticTwotone",
  }
];

export default { CrownMinimalisticBold, CrownMinimalisticBroken, CrownMinimalisticBulk, CrownMinimalisticLinear, CrownMinimalisticOutline, CrownMinimalisticTwotone };
