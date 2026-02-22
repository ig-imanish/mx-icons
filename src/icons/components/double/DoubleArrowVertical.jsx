import Icon from "../../Icon";

export default function DoubleArrowVertical({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M12 12l0 -8.5M12 12l0 8.5" stroke-dasharray="12">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="12;0" />
		</path>
		<path d="M12 3l-4 4M12 21l-4 -4M12 3l4 4M12 21l4 -4" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
