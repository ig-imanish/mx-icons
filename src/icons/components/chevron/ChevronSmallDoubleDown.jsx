import Icon from "../../Icon";

export default function ChevronSmallDoubleDown({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="10">
		<path d="M12 12l-5 -5M12 12l5 -5">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="10;0" />
		</path>
		<path d="M12 18l-5 -5M12 18l5 -5" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
