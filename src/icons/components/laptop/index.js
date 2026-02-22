import LaptopFilled from "./LaptopFilled";
import LaptopOff from "./LaptopOff";
import LaptopOffFilled from "./LaptopOffFilled";
import LaptopOffTwotone from "./LaptopOffTwotone";
import LaptopTwotone from "./LaptopTwotone";

export { LaptopFilled, LaptopOff, LaptopOffFilled, LaptopOffTwotone, LaptopTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "laptop-filled",
    Component: LaptopFilled,
    componentName: "LaptopFilled",
  },
  {
    variant: "linear",
    slug: "laptop-off",
    Component: LaptopOff,
    componentName: "LaptopOff",
  },
  {
    variant: "filled",
    slug: "laptop-off-filled",
    Component: LaptopOffFilled,
    componentName: "LaptopOffFilled",
  },
  {
    variant: "twotone",
    slug: "laptop-off-twotone",
    Component: LaptopOffTwotone,
    componentName: "LaptopOffTwotone",
  },
  {
    variant: "twotone",
    slug: "laptop-twotone",
    Component: LaptopTwotone,
    componentName: "LaptopTwotone",
  },
];
