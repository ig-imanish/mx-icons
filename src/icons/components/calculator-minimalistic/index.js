import CalculatorMinimalisticBold from "./CalculatorMinimalisticBold";
import CalculatorMinimalisticBroken from "./CalculatorMinimalisticBroken";
import CalculatorMinimalisticBulk from "./CalculatorMinimalisticBulk";
import CalculatorMinimalisticLinear from "./CalculatorMinimalisticLinear";
import CalculatorMinimalisticOutline from "./CalculatorMinimalisticOutline";
import CalculatorMinimalisticTwotone from "./CalculatorMinimalisticTwotone";

export { CalculatorMinimalisticBold, CalculatorMinimalisticBroken, CalculatorMinimalisticBulk, CalculatorMinimalisticLinear, CalculatorMinimalisticOutline, CalculatorMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calculator-minimalistic-bold",
    Component: CalculatorMinimalisticBold,
    componentName: "CalculatorMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "calculator-minimalistic-broken",
    Component: CalculatorMinimalisticBroken,
    componentName: "CalculatorMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "calculator-minimalistic-bulk",
    Component: CalculatorMinimalisticBulk,
    componentName: "CalculatorMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "calculator-minimalistic-linear",
    Component: CalculatorMinimalisticLinear,
    componentName: "CalculatorMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "calculator-minimalistic-outline",
    Component: CalculatorMinimalisticOutline,
    componentName: "CalculatorMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "calculator-minimalistic-twotone",
    Component: CalculatorMinimalisticTwotone,
    componentName: "CalculatorMinimalisticTwotone",
  }
];

export default { CalculatorMinimalisticBold, CalculatorMinimalisticBroken, CalculatorMinimalisticBulk, CalculatorMinimalisticLinear, CalculatorMinimalisticOutline, CalculatorMinimalisticTwotone };
