import React from "react";
import Icon from "../../Icon";

export default function SkateboardingTwotone({
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
      <path d="M3 17L4.20414 18.3379C4.58342 18.7594 5.12375 19 5.69073 19H18.3093C18.8762 19 19.4166 18.7594 19.7959 18.3379L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle opacity="0.5" cx="7" cy="21" r="1" fill="currentColor"/>
      <circle opacity="0.5" cx="17" cy="21" r="1" fill="currentColor"/>
      <circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 16.5004V15.2496C15 15.1657 15 15.1237 14.999 15.0843C14.9732 14.1062 14.4721 13.2021 13.6563 12.6619C13.6234 12.6401 13.5842 12.6155 13.5057 12.5665C13.4089 12.506 13.3604 12.4757 13.3291 12.4545C12.241 11.7158 12.1498 10.1461 13.145 9.2863C13.1735 9.2616 13.2125 9.23044 13.2903 9.16819L13.7358 8.81177C14.7607 7.99187 14.5413 6.37526 13.3349 5.85825C12.8119 5.6341 12.2123 5.68028 11.7297 5.98186L8.5 8.00044" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M7 15.5H7.37868C8.73694 15.5 10.0396 14.9604 11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M16.5 10C17.8131 10.3283 19.1869 10.3283 20.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
