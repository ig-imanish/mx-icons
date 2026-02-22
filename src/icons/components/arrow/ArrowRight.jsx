import Icon from "../../Icon";

export default function ArrowRight({
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
		<path d="M3 12h17.5" stroke-dasharray="20">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="20;0" />
		</path>
		<path d="M21 12l-7 7M21 12l-7 -7" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
