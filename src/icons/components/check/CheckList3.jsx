import Icon from "../../Icon";

export default function CheckList3({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<g stroke-dasharray="24">
			<path d="M11.5 5c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
				<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="24;0" />
			</path>
			<path d="M11.5 12c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="24">
				<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" fill="freeze" to="0" />
			</path>
			<path d="M11.5 19c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="24">
				<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.3s" fill="freeze" to="0" />
			</path>
		</g>
		<g stroke-width="2" stroke-dasharray="12">
			<path d="M3 5l2 2l4 -4" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M3 12l2 2l4 -4" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M3 19l2 2l4 -4" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="1s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
