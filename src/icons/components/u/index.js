import UTurnLeft from "./UTurnLeft";
import UTurnRight from "./UTurnRight";

export { UTurnLeft, UTurnRight };

export const variants = [
  {
    variant: "linear",
    slug: "u-turn-left",
    Component: UTurnLeft,
    componentName: "UTurnLeft",
  },
  {
    variant: "linear",
    slug: "u-turn-right",
    Component: UTurnRight,
    componentName: "UTurnRight",
  },
];
