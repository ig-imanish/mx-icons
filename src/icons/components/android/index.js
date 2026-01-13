import AndroidBold from "./AndroidBold";
import AndroidLinear from "./AndroidLinear";
import AndroidOutline from "./AndroidOutline";
import AndroidBulk from "./AndroidBulk";

export { AndroidBold, AndroidLinear, AndroidOutline, AndroidBulk };

export const variants = [
  {
    variant: "bold",
    slug: "android-bold",
    Component: AndroidBold,
    componentName: "AndroidBold",
  },
  {
    variant: "linear",
    slug: "android-linear",
    Component: AndroidLinear,
    componentName: "AndroidLinear",
  },
  {
    variant: "outline",
    slug: "android-outline",
    Component: AndroidOutline,
    componentName: "AndroidOutline",
  },
  {
    variant: "bulk",
    slug: "android-bulk",
    Component: AndroidBulk,
    componentName: "AndroidBulk",
  },
];

export default { AndroidBold, AndroidLinear, AndroidOutline, AndroidBulk };
