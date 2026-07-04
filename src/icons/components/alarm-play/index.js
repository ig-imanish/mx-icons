import AlarmPlayBold from "./AlarmPlayBold";
import AlarmPlayBroken from "./AlarmPlayBroken";
import AlarmPlayBulk from "./AlarmPlayBulk";
import AlarmPlayLinear from "./AlarmPlayLinear";
import AlarmPlayOutline from "./AlarmPlayOutline";
import AlarmPlayTwotone from "./AlarmPlayTwotone";

export { AlarmPlayBold, AlarmPlayBroken, AlarmPlayBulk, AlarmPlayLinear, AlarmPlayOutline, AlarmPlayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "alarm-play-bold",
    Component: AlarmPlayBold,
    componentName: "AlarmPlayBold",
  },,
  {
    variant: "broken",
    slug: "alarm-play-broken",
    Component: AlarmPlayBroken,
    componentName: "AlarmPlayBroken",
  },,
  {
    variant: "bulk",
    slug: "alarm-play-bulk",
    Component: AlarmPlayBulk,
    componentName: "AlarmPlayBulk",
  },,
  {
    variant: "linear",
    slug: "alarm-play-linear",
    Component: AlarmPlayLinear,
    componentName: "AlarmPlayLinear",
  },,
  {
    variant: "outline",
    slug: "alarm-play-outline",
    Component: AlarmPlayOutline,
    componentName: "AlarmPlayOutline",
  },,
  {
    variant: "twotone",
    slug: "alarm-play-twotone",
    Component: AlarmPlayTwotone,
    componentName: "AlarmPlayTwotone",
  }
];

export default { AlarmPlayBold, AlarmPlayBroken, AlarmPlayBulk, AlarmPlayLinear, AlarmPlayOutline, AlarmPlayTwotone };
