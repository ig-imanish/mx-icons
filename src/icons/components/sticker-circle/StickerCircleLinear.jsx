import React from "react";
import Icon from "../../Icon";

export default function StickerCircleLinear({
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
      <path d="M2 12C2 17.5228 6.47715 22 12 22C12.6477 22 13.2503 21.7004 13.7083 21.2424L21.2424 13.7083C21.7004 13.2503 22 12.6477 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
