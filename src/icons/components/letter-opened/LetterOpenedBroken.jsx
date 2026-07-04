import React from "react";
import Icon from "../../Icon";

export default function LetterOpenedBroken({
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
      <path d="M22 14.0001C22 17.7713 22 19.6569 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.6569 2 17.7713 2 14.0001C2 10.2288 2 8.34322 3.17157 7.17164C3.82475 6.51846 4.69989 6.22944 6 6.10156M18 6.10156C19.3001 6.22944 20.1752 6.51846 20.8284 7.17164C21.4816 7.82481 21.7706 8.69993 21.8985 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 2.00195C15.7066 2.01642 16.6474 2.11117 17.2678 2.73158C18 3.46381 18 4.64232 18 6.99935V9.0626C18 9.52324 18 9.75356 17.9056 9.95513C17.8112 10.1567 17.6342 10.3041 17.2804 10.599L16.5607 11.1987M10 2.00195C8.29344 2.01642 7.35264 2.11117 6.73223 2.73158C6 3.46381 6 4.64232 6 6.99935V9.0626C6 9.52324 6 9.75356 6.09441 9.95513C6.18882 10.1567 6.36576 10.3041 6.71963 10.599L8.1589 11.7984C9.99553 13.329 10.9139 14.0942 12 14.0942C12.6493 14.0942 13.2386 13.8207 14 13.2738" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
