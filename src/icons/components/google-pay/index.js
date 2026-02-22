import GooglePayBold from "./GooglePayBold";
import GooglePayTwoTone from "./GooglePayTwoTone";

export { GooglePayBold, GooglePayTwoTone };

export const variants = [
  {
    variant: "bold",
    slug: "google-pay-bold",
    Component: GooglePayBold,
    componentName: "GooglePayBold",
  },
  {
    variant: "twotone",
    slug: "google-pay-two-tone",
    Component: GooglePayTwoTone,
    componentName: "GooglePayTwoTone",
  },
];
