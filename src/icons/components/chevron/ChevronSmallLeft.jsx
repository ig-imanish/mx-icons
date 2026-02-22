import Icon from "../../Icon";

export default function ChevronSmallLeft({
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
      <path d="M9 12l5 -5M9 12l5 5" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10">
		<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="10;0" />
	</path>
    </Icon>
  );
}
