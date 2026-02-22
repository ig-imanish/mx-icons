import FavoriteChartBold from "./FavoriteChartBold";
import FavoriteChartBroken from "./FavoriteChartBroken";
import FavoriteChartBulk from "./FavoriteChartBulk";
import FavoriteChartLinear from "./FavoriteChartLinear";
import FavoriteChartOutline from "./FavoriteChartOutline";
import FavoriteChartTwotone from "./FavoriteChartTwotone";

export { FavoriteChartBold, FavoriteChartBroken, FavoriteChartBulk, FavoriteChartLinear, FavoriteChartOutline, FavoriteChartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "favorite-chart-bold",
    Component: FavoriteChartBold,
    componentName: "FavoriteChartBold",
  },
  {
    variant: "broken",
    slug: "favorite-chart-broken",
    Component: FavoriteChartBroken,
    componentName: "FavoriteChartBroken",
  },
  {
    variant: "bulk",
    slug: "favorite-chart-bulk",
    Component: FavoriteChartBulk,
    componentName: "FavoriteChartBulk",
  },
  {
    variant: "linear",
    slug: "favorite-chart-linear",
    Component: FavoriteChartLinear,
    componentName: "FavoriteChartLinear",
  },
  {
    variant: "outline",
    slug: "favorite-chart-outline",
    Component: FavoriteChartOutline,
    componentName: "FavoriteChartOutline",
  },
  {
    variant: "twotone",
    slug: "favorite-chart-twotone",
    Component: FavoriteChartTwotone,
    componentName: "FavoriteChartTwotone",
  },
];
