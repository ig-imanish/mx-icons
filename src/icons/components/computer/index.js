import ComputerFilled from "./ComputerFilled";
import ComputerOff from "./ComputerOff";
import ComputerOffFilled from "./ComputerOffFilled";
import ComputerOffTwotone from "./ComputerOffTwotone";
import ComputerTwotone from "./ComputerTwotone";

export { ComputerFilled, ComputerOff, ComputerOffFilled, ComputerOffTwotone, ComputerTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "computer-filled",
    Component: ComputerFilled,
    componentName: "ComputerFilled",
  },
  {
    variant: "linear",
    slug: "computer-off",
    Component: ComputerOff,
    componentName: "ComputerOff",
  },
  {
    variant: "filled",
    slug: "computer-off-filled",
    Component: ComputerOffFilled,
    componentName: "ComputerOffFilled",
  },
  {
    variant: "twotone",
    slug: "computer-off-twotone",
    Component: ComputerOffTwotone,
    componentName: "ComputerOffTwotone",
  },
  {
    variant: "twotone",
    slug: "computer-twotone",
    Component: ComputerTwotone,
    componentName: "ComputerTwotone",
  },
];
