import GooglePlayBold from "./GooglePlayBold";
import GooglePlayLinear from "./GooglePlayLinear";
import GooglePlayBroken from "./GooglePlayBroken";

export {
  GooglePlayBold,
  GooglePlayLinear,
  GooglePlayBroken,
};

export const variants = [
  {
    variant: "bold",
    slug: "google-play-bold",
    Component: GooglePlayBold,
    componentName: "GooglePlayBold",
  },
  {
    variant: "linear",
    slug: "google-play-linear",
    Component: GooglePlayLinear,
    componentName: "GooglePlayLinear",
  },
  {
    variant: "broken",
    slug: "google-play-broken",
    Component: GooglePlayBroken,
    componentName: "GooglePlayBroken",
  },
];

export default {
  GooglePlayBold,
  GooglePlayLinear,
  GooglePlayBroken,
};
