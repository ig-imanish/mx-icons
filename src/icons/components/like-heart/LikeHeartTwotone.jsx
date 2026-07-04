import React from "react";
import Icon from "../../Icon";

export default function LikeHeartTwotone({
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
      <path d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
