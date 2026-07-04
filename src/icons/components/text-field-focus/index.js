import TextFieldFocusBold from "./TextFieldFocusBold";
import TextFieldFocusBroken from "./TextFieldFocusBroken";
import TextFieldFocusBulk from "./TextFieldFocusBulk";
import TextFieldFocusLinear from "./TextFieldFocusLinear";
import TextFieldFocusOutline from "./TextFieldFocusOutline";
import TextFieldFocusTwotone from "./TextFieldFocusTwotone";

export { TextFieldFocusBold, TextFieldFocusBroken, TextFieldFocusBulk, TextFieldFocusLinear, TextFieldFocusOutline, TextFieldFocusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-field-focus-bold",
    Component: TextFieldFocusBold,
    componentName: "TextFieldFocusBold",
  },,
  {
    variant: "broken",
    slug: "text-field-focus-broken",
    Component: TextFieldFocusBroken,
    componentName: "TextFieldFocusBroken",
  },,
  {
    variant: "bulk",
    slug: "text-field-focus-bulk",
    Component: TextFieldFocusBulk,
    componentName: "TextFieldFocusBulk",
  },,
  {
    variant: "linear",
    slug: "text-field-focus-linear",
    Component: TextFieldFocusLinear,
    componentName: "TextFieldFocusLinear",
  },,
  {
    variant: "outline",
    slug: "text-field-focus-outline",
    Component: TextFieldFocusOutline,
    componentName: "TextFieldFocusOutline",
  },,
  {
    variant: "twotone",
    slug: "text-field-focus-twotone",
    Component: TextFieldFocusTwotone,
    componentName: "TextFieldFocusTwotone",
  }
];

export default { TextFieldFocusBold, TextFieldFocusBroken, TextFieldFocusBulk, TextFieldFocusLinear, TextFieldFocusOutline, TextFieldFocusTwotone };
