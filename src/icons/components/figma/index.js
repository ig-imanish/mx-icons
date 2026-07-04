import FigmaBold from "./FigmaBold";
import FigmaBroken from "./FigmaBroken";
import FigmaBulk from "./FigmaBulk";
import FigmaLinear from "./FigmaLinear";
import FigmaOutline from "./FigmaOutline";
import FigmaTwotone from "./FigmaTwotone";

export { FigmaBold, FigmaBroken, FigmaBulk, FigmaLinear, FigmaOutline, FigmaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "figma-bold",
    Component: FigmaBold,
    componentName: "FigmaBold",
  },,
  {
    variant: "broken",
    slug: "figma-broken",
    Component: FigmaBroken,
    componentName: "FigmaBroken",
  },,
  {
    variant: "bulk",
    slug: "figma-bulk",
    Component: FigmaBulk,
    componentName: "FigmaBulk",
  },,
  {
    variant: "linear",
    slug: "figma-linear",
    Component: FigmaLinear,
    componentName: "FigmaLinear",
  },,
  {
    variant: "outline",
    slug: "figma-outline",
    Component: FigmaOutline,
    componentName: "FigmaOutline",
  },,
  {
    variant: "twotone",
    slug: "figma-twotone",
    Component: FigmaTwotone,
    componentName: "FigmaTwotone",
  }
];

export default { FigmaBold, FigmaBroken, FigmaBulk, FigmaLinear, FigmaOutline, FigmaTwotone };
