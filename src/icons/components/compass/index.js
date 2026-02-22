import CompassFilled from "./CompassFilled";
import CompassFilledLoop from "./CompassFilledLoop";
import CompassLoop from "./CompassLoop";
import CompassOff from "./CompassOff";
import CompassOffFilled from "./CompassOffFilled";
import CompassOffFilledLoop from "./CompassOffFilledLoop";
import CompassOffLoop from "./CompassOffLoop";
import CompassOffTwotone from "./CompassOffTwotone";
import CompassOffTwotoneLoop from "./CompassOffTwotoneLoop";
import CompassTwotone from "./CompassTwotone";
import CompassTwotoneLoop from "./CompassTwotoneLoop";

export { CompassFilled, CompassFilledLoop, CompassLoop, CompassOff, CompassOffFilled, CompassOffFilledLoop, CompassOffLoop, CompassOffTwotone, CompassOffTwotoneLoop, CompassTwotone, CompassTwotoneLoop };

export const variants = [
  {
    variant: "filled",
    slug: "compass-filled",
    Component: CompassFilled,
    componentName: "CompassFilled",
  },
  {
    variant: "filled",
    slug: "compass-filled-loop",
    Component: CompassFilledLoop,
    componentName: "CompassFilledLoop",
  },
  {
    variant: "linear",
    slug: "compass-loop",
    Component: CompassLoop,
    componentName: "CompassLoop",
  },
  {
    variant: "linear",
    slug: "compass-off",
    Component: CompassOff,
    componentName: "CompassOff",
  },
  {
    variant: "filled",
    slug: "compass-off-filled",
    Component: CompassOffFilled,
    componentName: "CompassOffFilled",
  },
  {
    variant: "filled",
    slug: "compass-off-filled-loop",
    Component: CompassOffFilledLoop,
    componentName: "CompassOffFilledLoop",
  },
  {
    variant: "linear",
    slug: "compass-off-loop",
    Component: CompassOffLoop,
    componentName: "CompassOffLoop",
  },
  {
    variant: "twotone",
    slug: "compass-off-twotone",
    Component: CompassOffTwotone,
    componentName: "CompassOffTwotone",
  },
  {
    variant: "twotone",
    slug: "compass-off-twotone-loop",
    Component: CompassOffTwotoneLoop,
    componentName: "CompassOffTwotoneLoop",
  },
  {
    variant: "twotone",
    slug: "compass-twotone",
    Component: CompassTwotone,
    componentName: "CompassTwotone",
  },
  {
    variant: "twotone",
    slug: "compass-twotone-loop",
    Component: CompassTwotoneLoop,
    componentName: "CompassTwotoneLoop",
  },
];
