import WidgetAddBold from "./WidgetAddBold";
import WidgetAddBroken from "./WidgetAddBroken";
import WidgetAddBulk from "./WidgetAddBulk";
import WidgetAddLinear from "./WidgetAddLinear";
import WidgetAddOutline from "./WidgetAddOutline";
import WidgetAddTwotone from "./WidgetAddTwotone";

export { WidgetAddBold, WidgetAddBroken, WidgetAddBulk, WidgetAddLinear, WidgetAddOutline, WidgetAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "widget-add-bold",
    Component: WidgetAddBold,
    componentName: "WidgetAddBold",
  },,
  {
    variant: "broken",
    slug: "widget-add-broken",
    Component: WidgetAddBroken,
    componentName: "WidgetAddBroken",
  },,
  {
    variant: "bulk",
    slug: "widget-add-bulk",
    Component: WidgetAddBulk,
    componentName: "WidgetAddBulk",
  },,
  {
    variant: "linear",
    slug: "widget-add-linear",
    Component: WidgetAddLinear,
    componentName: "WidgetAddLinear",
  },,
  {
    variant: "outline",
    slug: "widget-add-outline",
    Component: WidgetAddOutline,
    componentName: "WidgetAddOutline",
  },,
  {
    variant: "twotone",
    slug: "widget-add-twotone",
    Component: WidgetAddTwotone,
    componentName: "WidgetAddTwotone",
  }
];

export default { WidgetAddBold, WidgetAddBroken, WidgetAddBulk, WidgetAddLinear, WidgetAddOutline, WidgetAddTwotone };
