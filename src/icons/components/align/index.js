import AlignCenter from "./AlignCenter";
import AlignJustify from "./AlignJustify";
import AlignLeft from "./AlignLeft";
import AlignRight from "./AlignRight";

export { AlignCenter, AlignJustify, AlignLeft, AlignRight };

export const variants = [
  {
    variant: "linear",
    slug: "align-center",
    Component: AlignCenter,
    componentName: "AlignCenter",
  },
  {
    variant: "linear",
    slug: "align-justify",
    Component: AlignJustify,
    componentName: "AlignJustify",
  },
  {
    variant: "linear",
    slug: "align-left",
    Component: AlignLeft,
    componentName: "AlignLeft",
  },
  {
    variant: "linear",
    slug: "align-right",
    Component: AlignRight,
    componentName: "AlignRight",
  },
];
