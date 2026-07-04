import TextFieldBold from "./TextFieldBold";
import TextFieldBroken from "./TextFieldBroken";
import TextFieldBulk from "./TextFieldBulk";
import TextFieldLinear from "./TextFieldLinear";
import TextFieldOutline from "./TextFieldOutline";
import TextFieldTwotone from "./TextFieldTwotone";

export { TextFieldBold, TextFieldBroken, TextFieldBulk, TextFieldLinear, TextFieldOutline, TextFieldTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-field-bold",
    Component: TextFieldBold,
    componentName: "TextFieldBold",
  },,
  {
    variant: "broken",
    slug: "text-field-broken",
    Component: TextFieldBroken,
    componentName: "TextFieldBroken",
  },,
  {
    variant: "bulk",
    slug: "text-field-bulk",
    Component: TextFieldBulk,
    componentName: "TextFieldBulk",
  },,
  {
    variant: "linear",
    slug: "text-field-linear",
    Component: TextFieldLinear,
    componentName: "TextFieldLinear",
  },,
  {
    variant: "outline",
    slug: "text-field-outline",
    Component: TextFieldOutline,
    componentName: "TextFieldOutline",
  },,
  {
    variant: "twotone",
    slug: "text-field-twotone",
    Component: TextFieldTwotone,
    componentName: "TextFieldTwotone",
  }
];

export default { TextFieldBold, TextFieldBroken, TextFieldBulk, TextFieldLinear, TextFieldOutline, TextFieldTwotone };
