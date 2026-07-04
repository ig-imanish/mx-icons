import TextFormattingEraserBold from "./TextFormattingEraserBold";
import TextFormattingEraserBroken from "./TextFormattingEraserBroken";
import TextFormattingEraserBulk from "./TextFormattingEraserBulk";
import TextFormattingEraserLinear from "./TextFormattingEraserLinear";
import TextFormattingEraserOutline from "./TextFormattingEraserOutline";
import TextFormattingEraserTwotone from "./TextFormattingEraserTwotone";

export { TextFormattingEraserBold, TextFormattingEraserBroken, TextFormattingEraserBulk, TextFormattingEraserLinear, TextFormattingEraserOutline, TextFormattingEraserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-formatting-eraser-bold",
    Component: TextFormattingEraserBold,
    componentName: "TextFormattingEraserBold",
  },,
  {
    variant: "broken",
    slug: "text-formatting-eraser-broken",
    Component: TextFormattingEraserBroken,
    componentName: "TextFormattingEraserBroken",
  },,
  {
    variant: "bulk",
    slug: "text-formatting-eraser-bulk",
    Component: TextFormattingEraserBulk,
    componentName: "TextFormattingEraserBulk",
  },,
  {
    variant: "linear",
    slug: "text-formatting-eraser-linear",
    Component: TextFormattingEraserLinear,
    componentName: "TextFormattingEraserLinear",
  },,
  {
    variant: "outline",
    slug: "text-formatting-eraser-outline",
    Component: TextFormattingEraserOutline,
    componentName: "TextFormattingEraserOutline",
  },,
  {
    variant: "twotone",
    slug: "text-formatting-eraser-twotone",
    Component: TextFormattingEraserTwotone,
    componentName: "TextFormattingEraserTwotone",
  }
];

export default { TextFormattingEraserBold, TextFormattingEraserBroken, TextFormattingEraserBulk, TextFormattingEraserLinear, TextFormattingEraserOutline, TextFormattingEraserTwotone };
