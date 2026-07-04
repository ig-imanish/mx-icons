import React from "react";
import Icon from "../../Icon";

export default function FacemaskSquareTwotone({
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
      <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
      <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
      <path d="M16.5 21.4996L17 14.9996L13.857 13.7424C12.6649 13.2656 11.3351 13.2656 10.143 13.7424L7 14.9996L7.5 21.4996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 15L2.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 19L3.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 15L21.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 19L20.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
