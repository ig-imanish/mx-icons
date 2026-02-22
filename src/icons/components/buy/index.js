import BuyMeACoffee from "./BuyMeACoffee";
import BuyMeACoffeeFilled from "./BuyMeACoffeeFilled";
import BuyMeACoffeeTwotone from "./BuyMeACoffeeTwotone";

export { BuyMeACoffee, BuyMeACoffeeFilled, BuyMeACoffeeTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "buy-me-a-coffee",
    Component: BuyMeACoffee,
    componentName: "BuyMeACoffee",
  },
  {
    variant: "filled",
    slug: "buy-me-a-coffee-filled",
    Component: BuyMeACoffeeFilled,
    componentName: "BuyMeACoffeeFilled",
  },
  {
    variant: "twotone",
    slug: "buy-me-a-coffee-twotone",
    Component: BuyMeACoffeeTwotone,
    componentName: "BuyMeACoffeeTwotone",
  },
];
