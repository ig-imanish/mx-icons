import Icon from "../../Icon";

export default function List3Filled({
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
      <g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<g stroke-dasharray="28">
			<path d="M9.5 5c0 -0.83 0.67 -1.5 1.5 -1.5h8c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-8c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="28;0" />
				<animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<path d="M9.5 12c0 -0.83 0.67 -1.5 1.5 -1.5h8c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-8c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="28" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" fill="freeze" to="0" />
				<animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<path d="M9.5 19c0 -0.83 0.67 -1.5 1.5 -1.5h8c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-8c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="28" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" begin="1s" dur="0.4s" fill="freeze" to="0" />
				<animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" to="1" />
			</path>
		</g>
		<g stroke-dasharray="12">
			<path d="M3.5 5c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="12" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
				<animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<path d="M3.5 12c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="12" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" fill="freeze" to="0" />
				<animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<path d="M3.5 19c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z" stroke-dashoffset="12" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" fill="freeze" to="0" />
				<animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" to="1" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
