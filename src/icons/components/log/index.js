import LogIn from "./LogIn";
import LogOut from "./LogOut";

export { LogIn, LogOut };

export const variants = [
  {
    variant: "linear",
    slug: "log-in",
    Component: LogIn,
    componentName: "LogIn",
  },
  {
    variant: "linear",
    slug: "log-out",
    Component: LogOut,
    componentName: "LogOut",
  },
];
