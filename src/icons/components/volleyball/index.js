import VolleyballBold from "./VolleyballBold";
import VolleyballBroken from "./VolleyballBroken";
import VolleyballBulk from "./VolleyballBulk";
import VolleyballLinear from "./VolleyballLinear";
import VolleyballOutline from "./VolleyballOutline";
import VolleyballTwotone from "./VolleyballTwotone";

export { VolleyballBold, VolleyballBroken, VolleyballBulk, VolleyballLinear, VolleyballOutline, VolleyballTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volleyball-bold",
    Component: VolleyballBold,
    componentName: "VolleyballBold",
  },,
  {
    variant: "broken",
    slug: "volleyball-broken",
    Component: VolleyballBroken,
    componentName: "VolleyballBroken",
  },,
  {
    variant: "bulk",
    slug: "volleyball-bulk",
    Component: VolleyballBulk,
    componentName: "VolleyballBulk",
  },,
  {
    variant: "linear",
    slug: "volleyball-linear",
    Component: VolleyballLinear,
    componentName: "VolleyballLinear",
  },,
  {
    variant: "outline",
    slug: "volleyball-outline",
    Component: VolleyballOutline,
    componentName: "VolleyballOutline",
  },,
  {
    variant: "twotone",
    slug: "volleyball-twotone",
    Component: VolleyballTwotone,
    componentName: "VolleyballTwotone",
  }
];

export default { VolleyballBold, VolleyballBroken, VolleyballBulk, VolleyballLinear, VolleyballOutline, VolleyballTwotone };
