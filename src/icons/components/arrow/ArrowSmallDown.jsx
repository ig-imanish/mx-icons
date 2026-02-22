import Icon from "../../Icon";

export default function ArrowSmallDown({
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
		<path d="M12 5l0 13.5" stroke-dasharray="16">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="16;0" />
		</path>
		<path d="M12 19l5 -5M12 19l-5 -5" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
