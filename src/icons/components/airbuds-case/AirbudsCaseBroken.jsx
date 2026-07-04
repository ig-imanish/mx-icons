import React from "react";
import Icon from "../../Icon";

export default function AirbudsCaseBroken({
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
      <path d="M3 13V11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3.42386 19.208 3.18814 18.3037 3.08351 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 7C16.1046 7 17 7.89543 17 9C17 10.1046 16.1046 11 15 11H9C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 9H17.5M7 9H3" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
