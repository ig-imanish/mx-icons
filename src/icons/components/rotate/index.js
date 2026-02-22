import Rotate180 from "./Rotate180";
import Rotate270 from "./Rotate270";
import Rotate90 from "./Rotate90";

export { Rotate180, Rotate270, Rotate90 };

export const variants = [
  {
    variant: "linear",
    slug: "rotate180",
    Component: Rotate180,
    componentName: "Rotate180",
  },
  {
    variant: "linear",
    slug: "rotate270",
    Component: Rotate270,
    componentName: "Rotate270",
  },
  {
    variant: "linear",
    slug: "rotate90",
    Component: Rotate90,
    componentName: "Rotate90",
  },
];
