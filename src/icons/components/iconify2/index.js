import Iconify2Static from "./Iconify2Static";
import Iconify2StaticTwotone from "./Iconify2StaticTwotone";
import Iconify2Twotone from "./Iconify2Twotone";

export { Iconify2Static, Iconify2StaticTwotone, Iconify2Twotone };

export const variants = [
  {
    variant: "linear",
    slug: "iconify2-static",
    Component: Iconify2Static,
    componentName: "Iconify2Static",
  },
  {
    variant: "twotone",
    slug: "iconify2-static-twotone",
    Component: Iconify2StaticTwotone,
    componentName: "Iconify2StaticTwotone",
  },
  {
    variant: "twotone",
    slug: "iconify2-twotone",
    Component: Iconify2Twotone,
    componentName: "Iconify2Twotone",
  },
];
