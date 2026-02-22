import CalculatorBold from "./CalculatorBold";
import CalculatorBroken from "./CalculatorBroken";
import CalculatorBulk from "./CalculatorBulk";
import CalculatorLinear from "./CalculatorLinear";
import CalculatorOutline from "./CalculatorOutline";
import CalculatorTwotone from "./CalculatorTwotone";

export { CalculatorBold, CalculatorBroken, CalculatorBulk, CalculatorLinear, CalculatorOutline, CalculatorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calculator-bold",
    Component: CalculatorBold,
    componentName: "CalculatorBold",
  },
  {
    variant: "broken",
    slug: "calculator-broken",
    Component: CalculatorBroken,
    componentName: "CalculatorBroken",
  },
  {
    variant: "bulk",
    slug: "calculator-bulk",
    Component: CalculatorBulk,
    componentName: "CalculatorBulk",
  },
  {
    variant: "linear",
    slug: "calculator-linear",
    Component: CalculatorLinear,
    componentName: "CalculatorLinear",
  },
  {
    variant: "outline",
    slug: "calculator-outline",
    Component: CalculatorOutline,
    componentName: "CalculatorOutline",
  },
  {
    variant: "twotone",
    slug: "calculator-twotone",
    Component: CalculatorTwotone,
    componentName: "CalculatorTwotone",
  },
];
