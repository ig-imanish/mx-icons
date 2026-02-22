import Icon from "../../Icon";

export default function AlignLeft({
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
		<path d="M4 5h13" stroke-dasharray="16">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="16;0" />
		</path>
		<path d="M4 10h10" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M4 15h16" stroke-dasharray="18" stroke-dashoffset="18">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.3s" fill="freeze" to="0" />
		</path>
		<path d="M4 20h13" stroke-dasharray="16" stroke-dashoffset="16">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.3s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
