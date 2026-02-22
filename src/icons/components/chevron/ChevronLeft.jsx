import Icon from "../../Icon";

export default function ChevronLeft({
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
      <path d="M8 12l7 -7M8 12l7 7" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12">
		<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="12;0" />
	</path>
    </Icon>
  );
}
