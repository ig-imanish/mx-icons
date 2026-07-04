import ThermometerBold from "./ThermometerBold";
import ThermometerBroken from "./ThermometerBroken";
import ThermometerBulk from "./ThermometerBulk";
import ThermometerLinear from "./ThermometerLinear";
import ThermometerOutline from "./ThermometerOutline";
import ThermometerTwotone from "./ThermometerTwotone";

export { ThermometerBold, ThermometerBroken, ThermometerBulk, ThermometerLinear, ThermometerOutline, ThermometerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "thermometer-bold",
    Component: ThermometerBold,
    componentName: "ThermometerBold",
  },,
  {
    variant: "broken",
    slug: "thermometer-broken",
    Component: ThermometerBroken,
    componentName: "ThermometerBroken",
  },,
  {
    variant: "bulk",
    slug: "thermometer-bulk",
    Component: ThermometerBulk,
    componentName: "ThermometerBulk",
  },,
  {
    variant: "linear",
    slug: "thermometer-linear",
    Component: ThermometerLinear,
    componentName: "ThermometerLinear",
  },,
  {
    variant: "outline",
    slug: "thermometer-outline",
    Component: ThermometerOutline,
    componentName: "ThermometerOutline",
  },,
  {
    variant: "twotone",
    slug: "thermometer-twotone",
    Component: ThermometerTwotone,
    componentName: "ThermometerTwotone",
  }
];

export default { ThermometerBold, ThermometerBroken, ThermometerBulk, ThermometerLinear, ThermometerOutline, ThermometerTwotone };
