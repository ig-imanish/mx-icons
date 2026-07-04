import React from "react";
import Icon from "../../Icon";

export default function SnowflakeTwotone({
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
      <path d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M3.33974 7.00042L6.80384 9.00042M6.80384 9.00042L11.9999 12.0004M6.80384 9.00042L5.70576 4.90234M6.80384 9.00042L2.70576 10.0985M11.9999 12.0004L17.1961 15.0004M11.9999 12.0004L17.1959 9.00042M11.9999 12.0004L6.80364 15.0004M17.1961 15.0004L20.6602 17.0004M17.1961 15.0004L21.2942 13.9023M17.1961 15.0004L18.2942 19.0985M20.66 7.00042L17.1959 9.00042M17.1959 9.00042L18.294 4.90234M17.1959 9.00042L21.294 10.0985M6.80364 15.0004L3.33954 17.0004M6.80364 15.0004L2.70557 13.9023M6.80364 15.0004L5.70557 19.0985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
