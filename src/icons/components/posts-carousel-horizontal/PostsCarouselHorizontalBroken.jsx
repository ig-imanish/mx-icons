import React from "react";
import Icon from "../../Icon";

export default function PostsCarouselHorizontalBroken({
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
      <path d="M22 19H21.5C20.1193 19 19 17.8807 19 16.5L19 7.5C19 6.11929 20.1193 5 21.5 5L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 19H2.5C3.88071 19 5 17.8807 5 16.5L5 7.5C5 6.11929 3.88071 5 2.5 5L2 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.9998 5.12601C15.387 5.2103 15.6792 5.35099 15.914 5.58579C16.4998 6.17157 16.4998 7.11438 16.4998 9L16.4998 15C16.4998 16.8856 16.4998 17.8284 15.914 18.4142C15.3282 19 14.3854 19 12.4998 19L11.4998 19C9.61414 19 8.67133 19 8.08554 18.4142C7.49976 17.8284 7.49976 16.8856 7.49976 15L7.49976 9C7.49976 7.11438 7.49976 6.17157 8.08554 5.58579C8.61709 5.05424 9.4426 5.00502 10.9998 5.00047" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
