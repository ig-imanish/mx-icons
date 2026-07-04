import React from "react";
import Icon from "../../Icon";

export default function PlaybackSpeedTwotone({
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.97715 2 12.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3"/>
      <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
