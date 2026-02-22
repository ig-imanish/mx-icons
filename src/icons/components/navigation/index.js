import NavigationLeftDown from "./NavigationLeftDown";
import NavigationLeftUp from "./NavigationLeftUp";
import NavigationRightDown from "./NavigationRightDown";
import NavigationRightUp from "./NavigationRightUp";

export { NavigationLeftDown, NavigationLeftUp, NavigationRightDown, NavigationRightUp };

export const variants = [
  {
    variant: "linear",
    slug: "navigation-left-down",
    Component: NavigationLeftDown,
    componentName: "NavigationLeftDown",
  },
  {
    variant: "linear",
    slug: "navigation-left-up",
    Component: NavigationLeftUp,
    componentName: "NavigationLeftUp",
  },
  {
    variant: "linear",
    slug: "navigation-right-down",
    Component: NavigationRightDown,
    componentName: "NavigationRightDown",
  },
  {
    variant: "linear",
    slug: "navigation-right-up",
    Component: NavigationRightUp,
    componentName: "NavigationRightUp",
  },
];
