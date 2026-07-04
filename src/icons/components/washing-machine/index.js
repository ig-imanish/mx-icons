import WashingMachineBold from "./WashingMachineBold";
import WashingMachineBroken from "./WashingMachineBroken";
import WashingMachineBulk from "./WashingMachineBulk";
import WashingMachineLinear from "./WashingMachineLinear";
import WashingMachineOutline from "./WashingMachineOutline";
import WashingMachineTwotone from "./WashingMachineTwotone";

export { WashingMachineBold, WashingMachineBroken, WashingMachineBulk, WashingMachineLinear, WashingMachineOutline, WashingMachineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "washing-machine-bold",
    Component: WashingMachineBold,
    componentName: "WashingMachineBold",
  },,
  {
    variant: "broken",
    slug: "washing-machine-broken",
    Component: WashingMachineBroken,
    componentName: "WashingMachineBroken",
  },,
  {
    variant: "bulk",
    slug: "washing-machine-bulk",
    Component: WashingMachineBulk,
    componentName: "WashingMachineBulk",
  },,
  {
    variant: "linear",
    slug: "washing-machine-linear",
    Component: WashingMachineLinear,
    componentName: "WashingMachineLinear",
  },,
  {
    variant: "outline",
    slug: "washing-machine-outline",
    Component: WashingMachineOutline,
    componentName: "WashingMachineOutline",
  },,
  {
    variant: "twotone",
    slug: "washing-machine-twotone",
    Component: WashingMachineTwotone,
    componentName: "WashingMachineTwotone",
  }
];

export default { WashingMachineBold, WashingMachineBroken, WashingMachineBulk, WashingMachineLinear, WashingMachineOutline, WashingMachineTwotone };
