import WidgetBold from "./WidgetBold";
import WidgetBroken from "./WidgetBroken";
import WidgetBulk from "./WidgetBulk";
import WidgetLinear from "./WidgetLinear";
import WidgetOutline from "./WidgetOutline";
import WidgetTwotone from "./WidgetTwotone";

export { WidgetBold, WidgetBroken, WidgetBulk, WidgetLinear, WidgetOutline, WidgetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "widget-bold",
    Component: WidgetBold,
    componentName: "WidgetBold",
  },,
  {
    variant: "broken",
    slug: "widget-broken",
    Component: WidgetBroken,
    componentName: "WidgetBroken",
  },,
  {
    variant: "bulk",
    slug: "widget-bulk",
    Component: WidgetBulk,
    componentName: "WidgetBulk",
  },,
  {
    variant: "linear",
    slug: "widget-linear",
    Component: WidgetLinear,
    componentName: "WidgetLinear",
  },,
  {
    variant: "outline",
    slug: "widget-outline",
    Component: WidgetOutline,
    componentName: "WidgetOutline",
  },,
  {
    variant: "twotone",
    slug: "widget-twotone",
    Component: WidgetTwotone,
    componentName: "WidgetTwotone",
  }
];

export default { WidgetBold, WidgetBroken, WidgetBulk, WidgetLinear, WidgetOutline, WidgetTwotone };
