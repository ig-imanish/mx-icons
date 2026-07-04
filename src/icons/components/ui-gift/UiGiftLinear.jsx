import React from "react";
import Icon from "../../Icon";

export default function UiGiftLinear({
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
      <path d="M22 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 12C13 14.2091 14.7909 16 17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 12C11 14.2091 9.20914 16 7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 10.0352C12 8.54529 13.014 7.24659 14.4594 6.88524C16.0631 6.48431 17.5158 7.93697 17.1148 9.5407C16.7535 10.9861 15.4548 12.0001 13.9649 12.0001H12V10.0352Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12.0001 10.0352C12.0001 8.54529 10.9861 7.24659 9.5407 6.88524C7.93698 6.48431 6.48431 7.93697 6.88524 9.5407C7.24659 10.9861 8.54529 12.0001 10.0352 12.0001H12.0001V10.0352Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
