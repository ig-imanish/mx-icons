import Icon from "../../Icon";

export default function Minus({
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
      <path d="M5 12h14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="16">
		<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="16;0" />
	</path>
    </Icon>
  );
}
