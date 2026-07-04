import AlarmAddBold from "./AlarmAddBold";
import AlarmAddBroken from "./AlarmAddBroken";
import AlarmAddBulk from "./AlarmAddBulk";
import AlarmAddLinear from "./AlarmAddLinear";
import AlarmAddOutline from "./AlarmAddOutline";
import AlarmAddTwotone from "./AlarmAddTwotone";

export { AlarmAddBold, AlarmAddBroken, AlarmAddBulk, AlarmAddLinear, AlarmAddOutline, AlarmAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "alarm-add-bold",
    Component: AlarmAddBold,
    componentName: "AlarmAddBold",
  },,
  {
    variant: "broken",
    slug: "alarm-add-broken",
    Component: AlarmAddBroken,
    componentName: "AlarmAddBroken",
  },,
  {
    variant: "bulk",
    slug: "alarm-add-bulk",
    Component: AlarmAddBulk,
    componentName: "AlarmAddBulk",
  },,
  {
    variant: "linear",
    slug: "alarm-add-linear",
    Component: AlarmAddLinear,
    componentName: "AlarmAddLinear",
  },,
  {
    variant: "outline",
    slug: "alarm-add-outline",
    Component: AlarmAddOutline,
    componentName: "AlarmAddOutline",
  },,
  {
    variant: "twotone",
    slug: "alarm-add-twotone",
    Component: AlarmAddTwotone,
    componentName: "AlarmAddTwotone",
  }
];

export default { AlarmAddBold, AlarmAddBroken, AlarmAddBulk, AlarmAddLinear, AlarmAddOutline, AlarmAddTwotone };
