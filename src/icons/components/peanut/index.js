import PeanutFilled from "./PeanutFilled";
import PeanutOff from "./PeanutOff";
import PeanutOffFilled from "./PeanutOffFilled";
import PeanutOffTwotone from "./PeanutOffTwotone";
import PeanutTwotone from "./PeanutTwotone";

export { PeanutFilled, PeanutOff, PeanutOffFilled, PeanutOffTwotone, PeanutTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "peanut-filled",
    Component: PeanutFilled,
    componentName: "PeanutFilled",
  },
  {
    variant: "linear",
    slug: "peanut-off",
    Component: PeanutOff,
    componentName: "PeanutOff",
  },
  {
    variant: "filled",
    slug: "peanut-off-filled",
    Component: PeanutOffFilled,
    componentName: "PeanutOffFilled",
  },
  {
    variant: "twotone",
    slug: "peanut-off-twotone",
    Component: PeanutOffTwotone,
    componentName: "PeanutOffTwotone",
  },
  {
    variant: "twotone",
    slug: "peanut-twotone",
    Component: PeanutTwotone,
    componentName: "PeanutTwotone",
  },
];
