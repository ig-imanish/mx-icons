import SchoolCalculatorBold from "./SchoolCalculatorBold";
import SchoolCalculatorBroken from "./SchoolCalculatorBroken";
import SchoolCalculatorBulk from "./SchoolCalculatorBulk";
import SchoolCalculatorLinear from "./SchoolCalculatorLinear";
import SchoolCalculatorOutline from "./SchoolCalculatorOutline";
import SchoolCalculatorTwotone from "./SchoolCalculatorTwotone";

export { SchoolCalculatorBold, SchoolCalculatorBroken, SchoolCalculatorBulk, SchoolCalculatorLinear, SchoolCalculatorOutline, SchoolCalculatorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "school-calculator-bold",
    Component: SchoolCalculatorBold,
    componentName: "SchoolCalculatorBold",
  },,
  {
    variant: "broken",
    slug: "school-calculator-broken",
    Component: SchoolCalculatorBroken,
    componentName: "SchoolCalculatorBroken",
  },,
  {
    variant: "bulk",
    slug: "school-calculator-bulk",
    Component: SchoolCalculatorBulk,
    componentName: "SchoolCalculatorBulk",
  },,
  {
    variant: "linear",
    slug: "school-calculator-linear",
    Component: SchoolCalculatorLinear,
    componentName: "SchoolCalculatorLinear",
  },,
  {
    variant: "outline",
    slug: "school-calculator-outline",
    Component: SchoolCalculatorOutline,
    componentName: "SchoolCalculatorOutline",
  },,
  {
    variant: "twotone",
    slug: "school-calculator-twotone",
    Component: SchoolCalculatorTwotone,
    componentName: "SchoolCalculatorTwotone",
  }
];

export default { SchoolCalculatorBold, SchoolCalculatorBroken, SchoolCalculatorBulk, SchoolCalculatorLinear, SchoolCalculatorOutline, SchoolCalculatorTwotone };
