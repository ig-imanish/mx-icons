import React from "react";
import Icon from "../../Icon";

export default function PaletteRoundTwotone({
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
      <path d="M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 8.24268L13.3137 4.92902C14.8758 3.36692 17.4084 3.36692 18.9705 4.92902C20.5326 6.49112 20.5326 9.02378 18.9705 10.5859L9.3064 20.25" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M6 22L18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14L15.5 14" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
