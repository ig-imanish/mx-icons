import TextBold from "./TextBold";
import TextBox from "./TextBox";
import TextBoxMultiple from "./TextBoxMultiple";
import TextBoxMultipleToTextBoxTransition from "./TextBoxMultipleToTextBoxTransition";
import TextBoxMultipleTwotone from "./TextBoxMultipleTwotone";
import TextBoxMultipleTwotoneToTextBoxTwotoneTransition from "./TextBoxMultipleTwotoneToTextBoxTwotoneTransition";
import TextBoxToTextBoxMultipleTransition from "./TextBoxToTextBoxMultipleTransition";
import TextBoxTwotone from "./TextBoxTwotone";
import TextBoxTwotoneToTextBoxMultipleTwotoneTransition from "./TextBoxTwotoneToTextBoxMultipleTwotoneTransition";
import TextBroken from "./TextBroken";
import TextBulk from "./TextBulk";
import TextLinear from "./TextLinear";
import TextOutline from "./TextOutline";
import TextTwotone from "./TextTwotone";

export { TextBold, TextBox, TextBoxMultiple, TextBoxMultipleToTextBoxTransition, TextBoxMultipleTwotone, TextBoxMultipleTwotoneToTextBoxTwotoneTransition, TextBoxToTextBoxMultipleTransition, TextBoxTwotone, TextBoxTwotoneToTextBoxMultipleTwotoneTransition, TextBroken, TextBulk, TextLinear, TextOutline, TextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-bold",
    Component: TextBold,
    componentName: "TextBold",
  },
  {
    variant: "linear",
    slug: "text-box",
    Component: TextBox,
    componentName: "TextBox",
  },
  {
    variant: "linear",
    slug: "text-box-multiple",
    Component: TextBoxMultiple,
    componentName: "TextBoxMultiple",
  },
  {
    variant: "linear",
    slug: "text-box-multiple-to-text-box-transition",
    Component: TextBoxMultipleToTextBoxTransition,
    componentName: "TextBoxMultipleToTextBoxTransition",
  },
  {
    variant: "twotone",
    slug: "text-box-multiple-twotone",
    Component: TextBoxMultipleTwotone,
    componentName: "TextBoxMultipleTwotone",
  },
  {
    variant: "twotone",
    slug: "text-box-multiple-twotone-to-text-box-twotone-transition",
    Component: TextBoxMultipleTwotoneToTextBoxTwotoneTransition,
    componentName: "TextBoxMultipleTwotoneToTextBoxTwotoneTransition",
  },
  {
    variant: "linear",
    slug: "text-box-to-text-box-multiple-transition",
    Component: TextBoxToTextBoxMultipleTransition,
    componentName: "TextBoxToTextBoxMultipleTransition",
  },
  {
    variant: "twotone",
    slug: "text-box-twotone",
    Component: TextBoxTwotone,
    componentName: "TextBoxTwotone",
  },
  {
    variant: "twotone",
    slug: "text-box-twotone-to-text-box-multiple-twotone-transition",
    Component: TextBoxTwotoneToTextBoxMultipleTwotoneTransition,
    componentName: "TextBoxTwotoneToTextBoxMultipleTwotoneTransition",
  },
  {
    variant: "broken",
    slug: "text-broken",
    Component: TextBroken,
    componentName: "TextBroken",
  },
  {
    variant: "bulk",
    slug: "text-bulk",
    Component: TextBulk,
    componentName: "TextBulk",
  },
  {
    variant: "linear",
    slug: "text-linear",
    Component: TextLinear,
    componentName: "TextLinear",
  },
  {
    variant: "outline",
    slug: "text-outline",
    Component: TextOutline,
    componentName: "TextOutline",
  },
  {
    variant: "twotone",
    slug: "text-twotone",
    Component: TextTwotone,
    componentName: "TextTwotone",
  },
];
