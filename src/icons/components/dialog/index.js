import DialogBold from "./DialogBold";
import DialogBroken from "./DialogBroken";
import DialogBulk from "./DialogBulk";
import DialogLinear from "./DialogLinear";
import DialogOutline from "./DialogOutline";
import DialogTwotone from "./DialogTwotone";

export { DialogBold, DialogBroken, DialogBulk, DialogLinear, DialogOutline, DialogTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dialog-bold",
    Component: DialogBold,
    componentName: "DialogBold",
  },,
  {
    variant: "broken",
    slug: "dialog-broken",
    Component: DialogBroken,
    componentName: "DialogBroken",
  },,
  {
    variant: "bulk",
    slug: "dialog-bulk",
    Component: DialogBulk,
    componentName: "DialogBulk",
  },,
  {
    variant: "linear",
    slug: "dialog-linear",
    Component: DialogLinear,
    componentName: "DialogLinear",
  },,
  {
    variant: "outline",
    slug: "dialog-outline",
    Component: DialogOutline,
    componentName: "DialogOutline",
  },,
  {
    variant: "twotone",
    slug: "dialog-twotone",
    Component: DialogTwotone,
    componentName: "DialogTwotone",
  }
];

export default { DialogBold, DialogBroken, DialogBulk, DialogLinear, DialogOutline, DialogTwotone };
