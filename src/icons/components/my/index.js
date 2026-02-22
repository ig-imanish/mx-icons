import MyLocation from "./MyLocation";
import MyLocationLoop from "./MyLocationLoop";
import MyLocationOff from "./MyLocationOff";
import MyLocationOffLoop from "./MyLocationOffLoop";
import MyLocationOffTwotone from "./MyLocationOffTwotone";
import MyLocationOffTwotoneLoop from "./MyLocationOffTwotoneLoop";
import MyLocationTwotone from "./MyLocationTwotone";
import MyLocationTwotoneLoop from "./MyLocationTwotoneLoop";

export { MyLocation, MyLocationLoop, MyLocationOff, MyLocationOffLoop, MyLocationOffTwotone, MyLocationOffTwotoneLoop, MyLocationTwotone, MyLocationTwotoneLoop };

export const variants = [
  {
    variant: "linear",
    slug: "my-location",
    Component: MyLocation,
    componentName: "MyLocation",
  },
  {
    variant: "linear",
    slug: "my-location-loop",
    Component: MyLocationLoop,
    componentName: "MyLocationLoop",
  },
  {
    variant: "linear",
    slug: "my-location-off",
    Component: MyLocationOff,
    componentName: "MyLocationOff",
  },
  {
    variant: "linear",
    slug: "my-location-off-loop",
    Component: MyLocationOffLoop,
    componentName: "MyLocationOffLoop",
  },
  {
    variant: "twotone",
    slug: "my-location-off-twotone",
    Component: MyLocationOffTwotone,
    componentName: "MyLocationOffTwotone",
  },
  {
    variant: "twotone",
    slug: "my-location-off-twotone-loop",
    Component: MyLocationOffTwotoneLoop,
    componentName: "MyLocationOffTwotoneLoop",
  },
  {
    variant: "twotone",
    slug: "my-location-twotone",
    Component: MyLocationTwotone,
    componentName: "MyLocationTwotone",
  },
  {
    variant: "twotone",
    slug: "my-location-twotone-loop",
    Component: MyLocationTwotoneLoop,
    componentName: "MyLocationTwotoneLoop",
  },
];
