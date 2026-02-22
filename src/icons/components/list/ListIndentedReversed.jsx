import Icon from "../../Icon";

export default function ListIndentedReversed({
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
		<path d="M10 5h0.01" stroke-dasharray="4">
			<animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="4;0" />
		</path>
		<path d="M14 5h6" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.1s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M8 10h0.01" stroke-dasharray="4" stroke-dashoffset="4">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 10h8" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M6 15h0.01" stroke-dasharray="4" stroke-dashoffset="4">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M10 15h10" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M4 20h0.01" stroke-dasharray="4" stroke-dashoffset="4">
			<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M8 20h12" stroke-dasharray="14" stroke-dashoffset="14">
			<animate attributeName="stroke-dashoffset" begin="1s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
