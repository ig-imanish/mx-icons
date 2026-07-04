import CloudsBold from "./CloudsBold";
import CloudsBroken from "./CloudsBroken";
import CloudsBulk from "./CloudsBulk";
import CloudsLinear from "./CloudsLinear";
import CloudsOutline from "./CloudsOutline";
import CloudsTwotone from "./CloudsTwotone";

export { CloudsBold, CloudsBroken, CloudsBulk, CloudsLinear, CloudsOutline, CloudsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clouds-bold",
    Component: CloudsBold,
    componentName: "CloudsBold",
  },,
  {
    variant: "broken",
    slug: "clouds-broken",
    Component: CloudsBroken,
    componentName: "CloudsBroken",
  },,
  {
    variant: "bulk",
    slug: "clouds-bulk",
    Component: CloudsBulk,
    componentName: "CloudsBulk",
  },,
  {
    variant: "linear",
    slug: "clouds-linear",
    Component: CloudsLinear,
    componentName: "CloudsLinear",
  },,
  {
    variant: "outline",
    slug: "clouds-outline",
    Component: CloudsOutline,
    componentName: "CloudsOutline",
  },,
  {
    variant: "twotone",
    slug: "clouds-twotone",
    Component: CloudsTwotone,
    componentName: "CloudsTwotone",
  }
];

export default { CloudsBold, CloudsBroken, CloudsBulk, CloudsLinear, CloudsOutline, CloudsTwotone };
