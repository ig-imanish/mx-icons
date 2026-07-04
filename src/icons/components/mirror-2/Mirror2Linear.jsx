import React from "react";
import Icon from "../../Icon";

export default function Mirror2Linear({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M4.35 17C3.49422 15.597 3 13.9413 3 12.168C3 7.10468 7.02944 3 12 3C16.9706 3 21 7.10468 21 12.168C21 13.9413 20.5058 15.597 19.65 17" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.63636 22H18.3636C20.3719 22 22 20.3719 22 18.3636C22 17.6105 21.3895 17 20.6364 17H16.8284C16.298 17 15.7893 17.2107 15.4142 17.5858L14.5858 18.4142C14.2107 18.7893 13.702 19 13.1716 19H10.8284C10.298 19 9.78929 18.7893 9.41421 18.4142L8.58579 17.5858C8.21071 17.2107 7.70201 17 7.17157 17H3.36364C2.61052 17 2 17.6105 2 18.3636C2 20.3719 3.62806 22 5.63636 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
