import React from "react";
import Icon from "../../Icon";

export default function WineglassBulk({
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
      <path opacity="0.5" d="M5 4.89474C5 3.8483 5.8483 3 6.89474 3H17.1053C18.1517 3 19 3.8483 19 4.89474V8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8V4.89474Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.25 20.25H8.25C7.83579 20.25 7.5 20.5858 7.5 21C7.5 21.4142 7.83579 21.75 8.25 21.75H15.75C16.1642 21.75 16.5 21.4142 16.5 21C16.5 20.5858 16.1642 20.25 15.75 20.25H12.75H11.25Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 15C15.5164 15 18.4271 12.4075 18.925 9.02973C18.5228 9.1868 16.5934 9.91562 15.231 9.99288C13.9036 10.0681 12.9519 9.53407 12.0002 9C11.0486 8.46593 10.0969 7.93185 8.76947 8.00712C7.39772 8.08491 5.45112 8.82324 5.06738 8.97342C5.54114 12.3787 8.46457 15 12.0002 15Z" fill="currentColor"/>
      <path opacity="0.5" d="M12.75 14.9603C12.5037 14.9865 12.2535 14.9999 12.0002 14.9999C11.7468 14.9999 11.4965 14.9865 11.25 14.9602V20.2499H12.75V14.9603Z" fill="currentColor"/>
    </Icon>
  );
}
