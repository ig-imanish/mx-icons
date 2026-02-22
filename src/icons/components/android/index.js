import AndroidBold from "./AndroidBold";
import AndroidBulk from "./AndroidBulk";
import AndroidLinear from "./AndroidLinear";
import AndroidOutline from "./AndroidOutline";

export { AndroidBold, AndroidBulk, AndroidLinear, AndroidOutline };

export const variants = [
  {
    variant: "bold",
    slug: "android-bold",
    Component: AndroidBold,
    componentName: "AndroidBold",
  },
  {
    variant: "bulk",
    slug: "android-bulk",
    Component: AndroidBulk,
    componentName: "AndroidBulk",
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
];
