import React from "react";
import Icon from "../../Icon";

export default function TestTubeMinimalisticBulk({
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
      <path d="M3.18744 15.0485C1.60418 16.6388 1.60418 19.2171 3.18744 20.8074C4.7707 22.3977 7.33768 22.3977 8.92094 20.8074L12.6667 17.0451L10.8946 16.3095C10.1177 15.9751 9.57994 15.2469 9.4866 14.4032C9.36539 13.3075 8.50424 12.4425 7.41335 12.3208H5.90317L3.18744 15.0485Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3625 2.23307C13.6756 1.92134 14.1822 1.92246 14.4939 2.23556L21.767 9.54081C22.0787 9.85392 22.0776 10.3605 21.7645 10.6722C21.4513 10.9839 20.9448 10.9828 20.6331 10.6697L13.36 3.36444C13.0483 3.05133 13.0494 2.5448 13.3625 2.23307Z" fill="currentColor"/>
      <path opacity="0.5" d="M14.0901 4.09766L3.18744 15.0485C1.60419 16.6388 1.60419 19.2171 3.18744 20.8074C4.7707 22.3976 7.33768 22.3976 8.92094 20.8074L19.8236 9.85652L14.0901 4.09766Z" fill="currentColor"/>
    </Icon>
  );
}
