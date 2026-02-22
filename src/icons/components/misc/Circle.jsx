import Icon from "../../Icon";

export default function Circle({
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
      <path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
	</path>
    </Icon>
  );
}
