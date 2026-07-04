import React from "react";
import Icon from "../../Icon";

export default function WatchRoundBroken({
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
      <path d="M17 6.5L16.6961 5.13228C16.3624 3.63065 16.1955 2.87983 15.6471 2.43992C15.0987 2 14.3296 2 12.7913 2H11.2087C9.67043 2 8.9013 2 8.35289 2.43992C7.80448 2.87983 7.63763 3.63065 7.30394 5.13228L7 6.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 17.5L16.6961 18.8677C16.3624 20.3694 16.1955 21.1202 15.6471 21.5601C15.0987 22 14.3296 22 12.7913 22H11.2087C9.67043 22 8.9013 22 8.35289 21.5601C7.80448 21.1202 7.63763 20.3694 7.30394 18.8677L7 17.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.75464 10.0578C5.08345 8.82656 5.73084 7.66266 6.6968 6.6967C9.62573 3.76777 14.3745 3.76777 17.3034 6.6967C20.2323 9.62563 20.2323 14.3744 17.3034 17.3033C14.3745 20.2322 9.62573 20.2322 6.6968 17.3033C5.73084 16.3373 5.08345 15.1734 4.75464 13.9422" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8.92283V11.9998L14 13.9228" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
