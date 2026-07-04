import React from "react";
import Icon from "../../Icon";

export default function MenTwotone({
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
      <circle cx="10" cy="14" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M22 2H22.75C22.75 1.58579 22.4142 1.25 22 1.25V2ZM21.25 7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7H21.25ZM17 1.25C16.5858 1.25 16.25 1.58579 16.25 2C16.25 2.41421 16.5858 2.75 17 2.75V1.25ZM16.0303 9.03033L22.5303 2.53033L21.4697 1.46967L14.9697 7.96967L16.0303 9.03033ZM21.25 2V7H22.75V2H21.25ZM17 2.75H22V1.25H17V2.75Z" fill="currentColor"/>
    </Icon>
  );
}
