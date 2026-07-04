import WeigherBold from "./WeigherBold";
import WeigherBroken from "./WeigherBroken";
import WeigherBulk from "./WeigherBulk";
import WeigherLinear from "./WeigherLinear";
import WeigherOutline from "./WeigherOutline";
import WeigherTwotone from "./WeigherTwotone";

export { WeigherBold, WeigherBroken, WeigherBulk, WeigherLinear, WeigherOutline, WeigherTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "weigher-bold",
    Component: WeigherBold,
    componentName: "WeigherBold",
  },,
  {
    variant: "broken",
    slug: "weigher-broken",
    Component: WeigherBroken,
    componentName: "WeigherBroken",
  },,
  {
    variant: "bulk",
    slug: "weigher-bulk",
    Component: WeigherBulk,
    componentName: "WeigherBulk",
  },,
  {
    variant: "linear",
    slug: "weigher-linear",
    Component: WeigherLinear,
    componentName: "WeigherLinear",
  },,
  {
    variant: "outline",
    slug: "weigher-outline",
    Component: WeigherOutline,
    componentName: "WeigherOutline",
  },,
  {
    variant: "twotone",
    slug: "weigher-twotone",
    Component: WeigherTwotone,
    componentName: "WeigherTwotone",
  }
];

export default { WeigherBold, WeigherBroken, WeigherBulk, WeigherLinear, WeigherOutline, WeigherTwotone };
