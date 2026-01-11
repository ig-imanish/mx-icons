import GooglePlayBold from "./GooglePlayBold";
import GooglePlayLinear from "./GooglePlayLinear";
import GooglePlayOutline from "./GooglePlayOutline";
import GooglePlayBulk from "./GooglePlayBulk";


export {
  GooglePlayBold,
  GooglePlayLinear,
  GooglePlayOutline,
  GooglePlayBulk,

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
    variant: "outline",
    slug: "google-play-outline",
    Component: GooglePlayOutline,
    componentName: "GooglePlayOutline",
  },
  {
    variant: "bulk",
    slug: "google-play-bulk",
    Component: GooglePlayBulk,
    componentName: "GooglePlayBulk",
  },
 
];

export default {
  GooglePlayBold,
  GooglePlayLinear,
  GooglePlayOutline,
  GooglePlayBulk,

};
