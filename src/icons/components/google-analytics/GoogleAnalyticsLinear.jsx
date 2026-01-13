import React from "react";
import Icon from "../../Icon";
export default function GoogleAnalyticsLinear({
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
      <path
        d="M20.5 0A3.5 3.5 0 0 0 17 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 20.5 0Z"
        stroke="currentColor"
      />
      <path
        d="M12 11a3.5 3.5 0 0 0 -3.5 3.5v6a3.5 3.5 0 0 0 7 0v-6A3.5 3.5 0 0 0 12 11Z"
        stroke="currentColor"
      />{" "}
      <path
        d="M0 20.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0"
        stroke="currentColor"
      />
    </Icon>
  );
}
