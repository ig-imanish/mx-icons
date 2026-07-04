import AlarmPauseBold from "./AlarmPauseBold";
import AlarmPauseBroken from "./AlarmPauseBroken";
import AlarmPauseBulk from "./AlarmPauseBulk";
import AlarmPauseLinear from "./AlarmPauseLinear";
import AlarmPauseOutline from "./AlarmPauseOutline";
import AlarmPauseTwotone from "./AlarmPauseTwotone";

export { AlarmPauseBold, AlarmPauseBroken, AlarmPauseBulk, AlarmPauseLinear, AlarmPauseOutline, AlarmPauseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "alarm-pause-bold",
    Component: AlarmPauseBold,
    componentName: "AlarmPauseBold",
  },,
  {
    variant: "broken",
    slug: "alarm-pause-broken",
    Component: AlarmPauseBroken,
    componentName: "AlarmPauseBroken",
  },,
  {
    variant: "bulk",
    slug: "alarm-pause-bulk",
    Component: AlarmPauseBulk,
    componentName: "AlarmPauseBulk",
  },,
  {
    variant: "linear",
    slug: "alarm-pause-linear",
    Component: AlarmPauseLinear,
    componentName: "AlarmPauseLinear",
  },,
  {
    variant: "outline",
    slug: "alarm-pause-outline",
    Component: AlarmPauseOutline,
    componentName: "AlarmPauseOutline",
  },,
  {
    variant: "twotone",
    slug: "alarm-pause-twotone",
    Component: AlarmPauseTwotone,
    componentName: "AlarmPauseTwotone",
  }
];

export default { AlarmPauseBold, AlarmPauseBroken, AlarmPauseBulk, AlarmPauseLinear, AlarmPauseOutline, AlarmPauseTwotone };
