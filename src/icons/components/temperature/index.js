import TemperatureBold from "./TemperatureBold";
import TemperatureBroken from "./TemperatureBroken";
import TemperatureBulk from "./TemperatureBulk";
import TemperatureLinear from "./TemperatureLinear";
import TemperatureOutline from "./TemperatureOutline";
import TemperatureTwotone from "./TemperatureTwotone";

export { TemperatureBold, TemperatureBroken, TemperatureBulk, TemperatureLinear, TemperatureOutline, TemperatureTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "temperature-bold",
    Component: TemperatureBold,
    componentName: "TemperatureBold",
  },,
  {
    variant: "broken",
    slug: "temperature-broken",
    Component: TemperatureBroken,
    componentName: "TemperatureBroken",
  },,
  {
    variant: "bulk",
    slug: "temperature-bulk",
    Component: TemperatureBulk,
    componentName: "TemperatureBulk",
  },,
  {
    variant: "linear",
    slug: "temperature-linear",
    Component: TemperatureLinear,
    componentName: "TemperatureLinear",
  },,
  {
    variant: "outline",
    slug: "temperature-outline",
    Component: TemperatureOutline,
    componentName: "TemperatureOutline",
  },,
  {
    variant: "twotone",
    slug: "temperature-twotone",
    Component: TemperatureTwotone,
    componentName: "TemperatureTwotone",
  }
];

export default { TemperatureBold, TemperatureBroken, TemperatureBulk, TemperatureLinear, TemperatureOutline, TemperatureTwotone };
