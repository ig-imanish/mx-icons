import React from "react";
import Icon from "../../Icon";

export default function TestTubeLinear({
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
      <path d="M9.74872 2.49415L18.1594 7.31987M9.74872 2.49415L2.65093 14.7455C1.31093 17.0584 2.10615 20.0159 4.42709 21.3513C6.74803 22.6867 9.7158 21.8942 11.0558 19.5813L12.5511 17.0003M9.74872 2.49415L8.91283 2M18.1594 7.31987L15.902 11.2163M18.1594 7.31987L19 7.80374M15.902 11.2163L14.1886 14.1738M15.902 11.2163L13.344 9.74451M14.1886 14.1738L12.5511 17.0003M14.1886 14.1738L9.98568 11.7556M12.5511 17.0003L9.93838 15.4971" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 14.9166C22 16.0672 21.1046 16.9999 20 16.9999C18.8954 16.9999 18 16.0672 18 14.9166C18 14.1967 18.783 13.2358 19.3691 12.6174C19.7161 12.2512 20.2839 12.2512 20.6309 12.6174C21.217 13.2358 22 14.1967 22 14.9166Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
