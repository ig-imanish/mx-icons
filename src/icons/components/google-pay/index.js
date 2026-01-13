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
    slug: "google-pay-twotone",
    Component: GooglePayTwoTone,
    componentName: "GooglePayTwoTone",
  },
];

export default { GooglePayBold, GooglePayTwoTone };
