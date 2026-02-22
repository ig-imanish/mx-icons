import LoadingAltLoop from "./LoadingAltLoop";
import LoadingLoop from "./LoadingLoop";
import LoadingTwotoneLoop from "./LoadingTwotoneLoop";

export { LoadingAltLoop, LoadingLoop, LoadingTwotoneLoop };

export const variants = [
  {
    variant: "linear",
    slug: "loading-alt-loop",
    Component: LoadingAltLoop,
    componentName: "LoadingAltLoop",
  },
  {
    variant: "linear",
    slug: "loading-loop",
    Component: LoadingLoop,
    componentName: "LoadingLoop",
  },
  {
    variant: "twotone",
    slug: "loading-twotone-loop",
    Component: LoadingTwotoneLoop,
    componentName: "LoadingTwotoneLoop",
  },
];
