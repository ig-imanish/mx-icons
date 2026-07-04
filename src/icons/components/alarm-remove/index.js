import AlarmRemoveBold from "./AlarmRemoveBold";
import AlarmRemoveBroken from "./AlarmRemoveBroken";
import AlarmRemoveBulk from "./AlarmRemoveBulk";
import AlarmRemoveLinear from "./AlarmRemoveLinear";
import AlarmRemoveOutline from "./AlarmRemoveOutline";
import AlarmRemoveTwotone from "./AlarmRemoveTwotone";

export { AlarmRemoveBold, AlarmRemoveBroken, AlarmRemoveBulk, AlarmRemoveLinear, AlarmRemoveOutline, AlarmRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "alarm-remove-bold",
    Component: AlarmRemoveBold,
    componentName: "AlarmRemoveBold",
  },,
  {
    variant: "broken",
    slug: "alarm-remove-broken",
    Component: AlarmRemoveBroken,
    componentName: "AlarmRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "alarm-remove-bulk",
    Component: AlarmRemoveBulk,
    componentName: "AlarmRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "alarm-remove-linear",
    Component: AlarmRemoveLinear,
    componentName: "AlarmRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "alarm-remove-outline",
    Component: AlarmRemoveOutline,
    componentName: "AlarmRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "alarm-remove-twotone",
    Component: AlarmRemoveTwotone,
    componentName: "AlarmRemoveTwotone",
  }
];

export default { AlarmRemoveBold, AlarmRemoveBroken, AlarmRemoveBulk, AlarmRemoveLinear, AlarmRemoveOutline, AlarmRemoveTwotone };
