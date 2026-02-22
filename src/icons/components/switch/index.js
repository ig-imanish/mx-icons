import SwitchFilled from "./SwitchFilled";
import SwitchFilledToSwitchOffFilledTransition from "./SwitchFilledToSwitchOffFilledTransition";
import SwitchOff from "./SwitchOff";
import SwitchOffFilled from "./SwitchOffFilled";
import SwitchOffFilledToSwitchFilledTransition from "./SwitchOffFilledToSwitchFilledTransition";
import SwitchOffToSwitchTransition from "./SwitchOffToSwitchTransition";
import SwitchOffTwotone from "./SwitchOffTwotone";
import SwitchOffTwotoneToSwitchTwotoneTransition from "./SwitchOffTwotoneToSwitchTwotoneTransition";
import SwitchToSwitchOffTransition from "./SwitchToSwitchOffTransition";
import SwitchTwotone from "./SwitchTwotone";
import SwitchTwotoneToSwitchOffTwotoneTransition from "./SwitchTwotoneToSwitchOffTwotoneTransition";

export { SwitchFilled, SwitchFilledToSwitchOffFilledTransition, SwitchOff, SwitchOffFilled, SwitchOffFilledToSwitchFilledTransition, SwitchOffToSwitchTransition, SwitchOffTwotone, SwitchOffTwotoneToSwitchTwotoneTransition, SwitchToSwitchOffTransition, SwitchTwotone, SwitchTwotoneToSwitchOffTwotoneTransition };

export const variants = [
  {
    variant: "filled",
    slug: "switch-filled",
    Component: SwitchFilled,
    componentName: "SwitchFilled",
  },
  {
    variant: "filled",
    slug: "switch-filled-to-switch-off-filled-transition",
    Component: SwitchFilledToSwitchOffFilledTransition,
    componentName: "SwitchFilledToSwitchOffFilledTransition",
  },
  {
    variant: "linear",
    slug: "switch-off",
    Component: SwitchOff,
    componentName: "SwitchOff",
  },
  {
    variant: "filled",
    slug: "switch-off-filled",
    Component: SwitchOffFilled,
    componentName: "SwitchOffFilled",
  },
  {
    variant: "filled",
    slug: "switch-off-filled-to-switch-filled-transition",
    Component: SwitchOffFilledToSwitchFilledTransition,
    componentName: "SwitchOffFilledToSwitchFilledTransition",
  },
  {
    variant: "linear",
    slug: "switch-off-to-switch-transition",
    Component: SwitchOffToSwitchTransition,
    componentName: "SwitchOffToSwitchTransition",
  },
  {
    variant: "twotone",
    slug: "switch-off-twotone",
    Component: SwitchOffTwotone,
    componentName: "SwitchOffTwotone",
  },
  {
    variant: "twotone",
    slug: "switch-off-twotone-to-switch-twotone-transition",
    Component: SwitchOffTwotoneToSwitchTwotoneTransition,
    componentName: "SwitchOffTwotoneToSwitchTwotoneTransition",
  },
  {
    variant: "linear",
    slug: "switch-to-switch-off-transition",
    Component: SwitchToSwitchOffTransition,
    componentName: "SwitchToSwitchOffTransition",
  },
  {
    variant: "twotone",
    slug: "switch-twotone",
    Component: SwitchTwotone,
    componentName: "SwitchTwotone",
  },
  {
    variant: "twotone",
    slug: "switch-twotone-to-switch-off-twotone-transition",
    Component: SwitchTwotoneToSwitchOffTwotoneTransition,
    componentName: "SwitchTwotoneToSwitchOffTwotoneTransition",
  },
];
