import React from "react";
import Icon from "../../Icon";

export default function StickerSmileCircleTwotone({
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
      <path opacity="0.5" d="M2 12C2 17.5228 6.47715 22 12 22C12.6477 22 13.2503 21.7004 13.7083 21.2424L21.2424 13.7083C21.7004 13.2503 22 12.6477 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.9126 15.9336C9.94668 16.1928 11.0951 16.2391 12.2688 16.0337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="14.5094" cy="9.77405" rx="1" ry="1.5" transform="rotate(-15 14.5094 9.77405)" fill="currentColor"/>
      <ellipse cx="8.71402" cy="11.3278" rx="1" ry="1.5" transform="rotate(-15 8.71402 11.3278)" fill="currentColor"/>
      <path d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
