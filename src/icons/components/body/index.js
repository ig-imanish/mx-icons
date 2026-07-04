import BodyBold from "./BodyBold";
import BodyBroken from "./BodyBroken";
import BodyBulk from "./BodyBulk";
import BodyLinear from "./BodyLinear";
import BodyOutline from "./BodyOutline";
import BodyTwotone from "./BodyTwotone";

export { BodyBold, BodyBroken, BodyBulk, BodyLinear, BodyOutline, BodyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "body-bold",
    Component: BodyBold,
    componentName: "BodyBold",
  },,
  {
    variant: "broken",
    slug: "body-broken",
    Component: BodyBroken,
    componentName: "BodyBroken",
  },,
  {
    variant: "bulk",
    slug: "body-bulk",
    Component: BodyBulk,
    componentName: "BodyBulk",
  },,
  {
    variant: "linear",
    slug: "body-linear",
    Component: BodyLinear,
    componentName: "BodyLinear",
  },,
  {
    variant: "outline",
    slug: "body-outline",
    Component: BodyOutline,
    componentName: "BodyOutline",
  },,
  {
    variant: "twotone",
    slug: "body-twotone",
    Component: BodyTwotone,
    componentName: "BodyTwotone",
  }
];

export default { BodyBold, BodyBroken, BodyBulk, BodyLinear, BodyOutline, BodyTwotone };
