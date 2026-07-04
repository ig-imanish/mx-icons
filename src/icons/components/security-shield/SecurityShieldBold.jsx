import React from "react";
import Icon from "../../Icon";

export default function SecurityShieldBold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M11.25 2.07324C10.6437 2.18634 9.93159 2.43011 8.83772 2.80454L8.26491 3.00062C5.25832 4.02978 3.75503 4.54436 3.37752 5.08223C3.00825 5.60836 3.00018 7.14957 3 10.2093L11.25 7.45925V2.07324Z" fill="currentColor"/>
      <path d="M11.25 9.04039L3 11.7904V11.9912C3 17.6293 7.23896 20.3653 9.89856 21.5271C10.4093 21.7502 10.7392 21.8943 11.25 21.9595V9.04039Z" fill="currentColor"/>
      <path d="M12.75 21.9595V9.04039L21 11.7904V11.9912C21 17.6293 16.761 20.3653 14.1014 21.5271C13.5907 21.7502 13.2608 21.8943 12.75 21.9595Z" fill="currentColor"/>
      <path d="M12.75 7.45925V2.07324C13.3563 2.18634 14.0684 2.43011 15.1623 2.80454L15.7351 3.00062C18.7417 4.02978 20.245 4.54436 20.6225 5.08223C20.9918 5.60836 20.9998 7.14957 21 10.2093L12.75 7.45925Z" fill="currentColor"/>
    </Icon>
  );
}
