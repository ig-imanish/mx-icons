import WeatherSunBold from "./WeatherSunBold";
import WeatherSunBroken from "./WeatherSunBroken";
import WeatherSunBulk from "./WeatherSunBulk";
import WeatherSunLinear from "./WeatherSunLinear";
import WeatherSunOutline from "./WeatherSunOutline";
import WeatherSunTwotone from "./WeatherSunTwotone";

export { WeatherSunBold, WeatherSunBroken, WeatherSunBulk, WeatherSunLinear, WeatherSunOutline, WeatherSunTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "weather-sun-bold",
    Component: WeatherSunBold,
    componentName: "WeatherSunBold",
  },,
  {
    variant: "broken",
    slug: "weather-sun-broken",
    Component: WeatherSunBroken,
    componentName: "WeatherSunBroken",
  },,
  {
    variant: "bulk",
    slug: "weather-sun-bulk",
    Component: WeatherSunBulk,
    componentName: "WeatherSunBulk",
  },,
  {
    variant: "linear",
    slug: "weather-sun-linear",
    Component: WeatherSunLinear,
    componentName: "WeatherSunLinear",
  },,
  {
    variant: "outline",
    slug: "weather-sun-outline",
    Component: WeatherSunOutline,
    componentName: "WeatherSunOutline",
  },,
  {
    variant: "twotone",
    slug: "weather-sun-twotone",
    Component: WeatherSunTwotone,
    componentName: "WeatherSunTwotone",
  }
];

export default { WeatherSunBold, WeatherSunBroken, WeatherSunBulk, WeatherSunLinear, WeatherSunOutline, WeatherSunTwotone };
