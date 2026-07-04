import React from "react";
import Icon from "../../Icon";

export default function RecordAudioCircleTwotone({
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
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
