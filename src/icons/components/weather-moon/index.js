import WeatherMoonBold from "./WeatherMoonBold";
import WeatherMoonBroken from "./WeatherMoonBroken";
import WeatherMoonBulk from "./WeatherMoonBulk";
import WeatherMoonLinear from "./WeatherMoonLinear";
import WeatherMoonOutline from "./WeatherMoonOutline";
import WeatherMoonTwotone from "./WeatherMoonTwotone";

export { WeatherMoonBold, WeatherMoonBroken, WeatherMoonBulk, WeatherMoonLinear, WeatherMoonOutline, WeatherMoonTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "weather-moon-bold",
    Component: WeatherMoonBold,
    componentName: "WeatherMoonBold",
  },,
  {
    variant: "broken",
    slug: "weather-moon-broken",
    Component: WeatherMoonBroken,
    componentName: "WeatherMoonBroken",
  },,
  {
    variant: "bulk",
    slug: "weather-moon-bulk",
    Component: WeatherMoonBulk,
    componentName: "WeatherMoonBulk",
  },,
  {
    variant: "linear",
    slug: "weather-moon-linear",
    Component: WeatherMoonLinear,
    componentName: "WeatherMoonLinear",
  },,
  {
    variant: "outline",
    slug: "weather-moon-outline",
    Component: WeatherMoonOutline,
    componentName: "WeatherMoonOutline",
  },,
  {
    variant: "twotone",
    slug: "weather-moon-twotone",
    Component: WeatherMoonTwotone,
    componentName: "WeatherMoonTwotone",
  }
];

export default { WeatherMoonBold, WeatherMoonBroken, WeatherMoonBulk, WeatherMoonLinear, WeatherMoonOutline, WeatherMoonTwotone };
