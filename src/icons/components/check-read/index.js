import CheckReadBold from "./CheckReadBold";
import CheckReadBroken from "./CheckReadBroken";
import CheckReadBulk from "./CheckReadBulk";
import CheckReadLinear from "./CheckReadLinear";
import CheckReadOutline from "./CheckReadOutline";
import CheckReadTwotone from "./CheckReadTwotone";

export { CheckReadBold, CheckReadBroken, CheckReadBulk, CheckReadLinear, CheckReadOutline, CheckReadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "check-read-bold",
    Component: CheckReadBold,
    componentName: "CheckReadBold",
  },,
  {
    variant: "broken",
    slug: "check-read-broken",
    Component: CheckReadBroken,
    componentName: "CheckReadBroken",
  },,
  {
    variant: "bulk",
    slug: "check-read-bulk",
    Component: CheckReadBulk,
    componentName: "CheckReadBulk",
  },,
  {
    variant: "linear",
    slug: "check-read-linear",
    Component: CheckReadLinear,
    componentName: "CheckReadLinear",
  },,
  {
    variant: "outline",
    slug: "check-read-outline",
    Component: CheckReadOutline,
    componentName: "CheckReadOutline",
  },,
  {
    variant: "twotone",
    slug: "check-read-twotone",
    Component: CheckReadTwotone,
    componentName: "CheckReadTwotone",
  }
];

export default { CheckReadBold, CheckReadBroken, CheckReadBulk, CheckReadLinear, CheckReadOutline, CheckReadTwotone };
