import PizzaFilled from "./PizzaFilled";
import PizzaOff from "./PizzaOff";
import PizzaOffFilled from "./PizzaOffFilled";
import PizzaOffTwotone from "./PizzaOffTwotone";
import PizzaTwotone from "./PizzaTwotone";

export { PizzaFilled, PizzaOff, PizzaOffFilled, PizzaOffTwotone, PizzaTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "pizza-filled",
    Component: PizzaFilled,
    componentName: "PizzaFilled",
  },
  {
    variant: "linear",
    slug: "pizza-off",
    Component: PizzaOff,
    componentName: "PizzaOff",
  },
  {
    variant: "filled",
    slug: "pizza-off-filled",
    Component: PizzaOffFilled,
    componentName: "PizzaOffFilled",
  },
  {
    variant: "twotone",
    slug: "pizza-off-twotone",
    Component: PizzaOffTwotone,
    componentName: "PizzaOffTwotone",
  },
  {
    variant: "twotone",
    slug: "pizza-twotone",
    Component: PizzaTwotone,
    componentName: "PizzaTwotone",
  },
];
