import MenBold from "./MenBold";
import MenBroken from "./MenBroken";
import MenBulk from "./MenBulk";
import MenLinear from "./MenLinear";
import MenOutline from "./MenOutline";
import MenTwotone from "./MenTwotone";

export { MenBold, MenBroken, MenBulk, MenLinear, MenOutline, MenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "men-bold",
    Component: MenBold,
    componentName: "MenBold",
  },,
  {
    variant: "broken",
    slug: "men-broken",
    Component: MenBroken,
    componentName: "MenBroken",
  },,
  {
    variant: "bulk",
    slug: "men-bulk",
    Component: MenBulk,
    componentName: "MenBulk",
  },,
  {
    variant: "linear",
    slug: "men-linear",
    Component: MenLinear,
    componentName: "MenLinear",
  },,
  {
    variant: "outline",
    slug: "men-outline",
    Component: MenOutline,
    componentName: "MenOutline",
  },,
  {
    variant: "twotone",
    slug: "men-twotone",
    Component: MenTwotone,
    componentName: "MenTwotone",
  }
];

export default { MenBold, MenBroken, MenBulk, MenLinear, MenOutline, MenTwotone };
