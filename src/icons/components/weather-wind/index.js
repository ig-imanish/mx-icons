import WeatherWindBold from "./WeatherWindBold";
import WeatherWindBroken from "./WeatherWindBroken";
import WeatherWindBulk from "./WeatherWindBulk";
import WeatherWindLinear from "./WeatherWindLinear";
import WeatherWindOutline from "./WeatherWindOutline";
import WeatherWindTwotone from "./WeatherWindTwotone";

export { WeatherWindBold, WeatherWindBroken, WeatherWindBulk, WeatherWindLinear, WeatherWindOutline, WeatherWindTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "weather-wind-bold",
    Component: WeatherWindBold,
    componentName: "WeatherWindBold",
  },,
  {
    variant: "broken",
    slug: "weather-wind-broken",
    Component: WeatherWindBroken,
    componentName: "WeatherWindBroken",
  },,
  {
    variant: "bulk",
    slug: "weather-wind-bulk",
    Component: WeatherWindBulk,
    componentName: "WeatherWindBulk",
  },,
  {
    variant: "linear",
    slug: "weather-wind-linear",
    Component: WeatherWindLinear,
    componentName: "WeatherWindLinear",
  },,
  {
    variant: "outline",
    slug: "weather-wind-outline",
    Component: WeatherWindOutline,
    componentName: "WeatherWindOutline",
  },,
  {
    variant: "twotone",
    slug: "weather-wind-twotone",
    Component: WeatherWindTwotone,
    componentName: "WeatherWindTwotone",
  }
];

export default { WeatherWindBold, WeatherWindBroken, WeatherWindBulk, WeatherWindLinear, WeatherWindOutline, WeatherWindTwotone };
