import PixelfedFilled from "./PixelfedFilled";
import PixelfedTwotone from "./PixelfedTwotone";

export { PixelfedFilled, PixelfedTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "pixelfed-filled",
    Component: PixelfedFilled,
    componentName: "PixelfedFilled",
  },
  {
    variant: "twotone",
    slug: "pixelfed-twotone",
    Component: PixelfedTwotone,
    componentName: "PixelfedTwotone",
  },
];
