import MushroomFilled from "./MushroomFilled";
import MushroomOff from "./MushroomOff";
import MushroomOffFilled from "./MushroomOffFilled";
import MushroomOffTwotone from "./MushroomOffTwotone";
import MushroomTwotone from "./MushroomTwotone";

export { MushroomFilled, MushroomOff, MushroomOffFilled, MushroomOffTwotone, MushroomTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "mushroom-filled",
    Component: MushroomFilled,
    componentName: "MushroomFilled",
  },
  {
    variant: "linear",
    slug: "mushroom-off",
    Component: MushroomOff,
    componentName: "MushroomOff",
  },
  {
    variant: "filled",
    slug: "mushroom-off-filled",
    Component: MushroomOffFilled,
    componentName: "MushroomOffFilled",
  },
  {
    variant: "twotone",
    slug: "mushroom-off-twotone",
    Component: MushroomOffTwotone,
    componentName: "MushroomOffTwotone",
  },
  {
    variant: "twotone",
    slug: "mushroom-twotone",
    Component: MushroomTwotone,
    componentName: "MushroomTwotone",
  },
];
