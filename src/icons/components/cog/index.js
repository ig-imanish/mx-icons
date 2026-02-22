import CogFilled from "./CogFilled";
import CogFilledLoop from "./CogFilledLoop";
import CogLoop from "./CogLoop";
import CogOff from "./CogOff";
import CogOffFilled from "./CogOffFilled";
import CogOffFilledLoop from "./CogOffFilledLoop";
import CogOffLoop from "./CogOffLoop";

export { CogFilled, CogFilledLoop, CogLoop, CogOff, CogOffFilled, CogOffFilledLoop, CogOffLoop };

export const variants = [
  {
    variant: "filled",
    slug: "cog-filled",
    Component: CogFilled,
    componentName: "CogFilled",
  },
  {
    variant: "filled",
    slug: "cog-filled-loop",
    Component: CogFilledLoop,
    componentName: "CogFilledLoop",
  },
  {
    variant: "linear",
    slug: "cog-loop",
    Component: CogLoop,
    componentName: "CogLoop",
  },
  {
    variant: "linear",
    slug: "cog-off",
    Component: CogOff,
    componentName: "CogOff",
  },
  {
    variant: "filled",
    slug: "cog-off-filled",
    Component: CogOffFilled,
    componentName: "CogOffFilled",
  },
  {
    variant: "filled",
    slug: "cog-off-filled-loop",
    Component: CogOffFilledLoop,
    componentName: "CogOffFilledLoop",
  },
  {
    variant: "linear",
    slug: "cog-off-loop",
    Component: CogOffLoop,
    componentName: "CogOffLoop",
  },
];
