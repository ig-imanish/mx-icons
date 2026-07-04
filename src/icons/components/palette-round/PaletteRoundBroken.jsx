import React from "react";
import Icon from "../../Icon";

export default function PaletteRoundBroken({
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
      <path d="M2 8V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 8.24268L13.3137 4.92902C14.8758 3.36692 17.4084 3.36692 18.9705 4.92902C20.5326 6.49112 20.5326 9.02378 18.9705 10.5859L9.3064 20.25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18 22V21.25V22ZM18 14V14.75V14ZM22 18H21.25H22ZM13 22.75C13.4142 22.75 13.75 22.4142 13.75 22C13.75 21.5858 13.4142 21.25 13 21.25V22.75ZM17 21.25C16.5858 21.25 16.25 21.5858 16.25 22C16.25 22.4142 16.5858 22.75 17 22.75V21.25ZM15.5 14.75L18 14.75V13.25L15.5 13.25V14.75ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V22.75C20.6234 22.75 22.75 20.6234 22.75 18H21.25ZM22.75 18C22.75 15.3766 20.6234 13.25 18 13.25V14.75C19.7949 14.75 21.25 16.2051 21.25 18H22.75ZM13 21.25L6 21.25L6 22.75L13 22.75V21.25ZM18 21.25H17V22.75H18V21.25Z" fill="currentColor"/>
      <path d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
