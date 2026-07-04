import WeatherCloudBold from "./WeatherCloudBold";
import WeatherCloudBroken from "./WeatherCloudBroken";
import WeatherCloudBulk from "./WeatherCloudBulk";
import WeatherCloudLinear from "./WeatherCloudLinear";
import WeatherCloudOutline from "./WeatherCloudOutline";
import WeatherCloudTwotone from "./WeatherCloudTwotone";

export { WeatherCloudBold, WeatherCloudBroken, WeatherCloudBulk, WeatherCloudLinear, WeatherCloudOutline, WeatherCloudTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "weather-cloud-bold",
    Component: WeatherCloudBold,
    componentName: "WeatherCloudBold",
  },,
  {
    variant: "broken",
    slug: "weather-cloud-broken",
    Component: WeatherCloudBroken,
    componentName: "WeatherCloudBroken",
  },,
  {
    variant: "bulk",
    slug: "weather-cloud-bulk",
    Component: WeatherCloudBulk,
    componentName: "WeatherCloudBulk",
  },,
  {
    variant: "linear",
    slug: "weather-cloud-linear",
    Component: WeatherCloudLinear,
    componentName: "WeatherCloudLinear",
  },,
  {
    variant: "outline",
    slug: "weather-cloud-outline",
    Component: WeatherCloudOutline,
    componentName: "WeatherCloudOutline",
  },,
  {
    variant: "twotone",
    slug: "weather-cloud-twotone",
    Component: WeatherCloudTwotone,
    componentName: "WeatherCloudTwotone",
  }
];

export default { WeatherCloudBold, WeatherCloudBroken, WeatherCloudBulk, WeatherCloudLinear, WeatherCloudOutline, WeatherCloudTwotone };
