import React from "react";
import Icon from "../../Icon";

export default function BalloonTwotone({
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
      <path d="M11.9395 17.5C16.0815 17.5334 19.5332 13.7025 19.4998 9.56052C19.4663 5.41852 16.0815 2.03367 11.9395 2.00025C7.79748 1.96683 4.46683 5.29748 4.50025 9.43948C4.53367 13.5815 7.79748 17.4666 11.9395 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M15.5 9C15.4867 7.35641 14.1436 6.01326 12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 19.8504C12.3212 19.8504 12.4818 19.8504 12.5933 19.8284C13.2466 19.7 13.6441 19.0559 13.4511 18.4386C13.4181 18.3332 13.342 18.1964 13.1896 17.9229M12 19.8504C11.6788 19.8504 11.5182 19.8504 11.4067 19.8284C10.7534 19.7 10.3559 19.0559 10.5489 18.4386C10.5819 18.3332 10.658 18.1964 10.8104 17.9229M12 19.8504V22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
