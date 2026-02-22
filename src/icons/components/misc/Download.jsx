import Icon from "../../Icon";

export default function Download({
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5" fill="currentColor" stroke-dasharray="20" fill-opacity="0">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="20;0" />
			<animate attributeName="fill-opacity" begin="0.7s" dur="0.4s" fill="freeze" to="1" />
		</path>
		<path d="M6 19h12" fill="none" stroke-dasharray="14" stroke-dashoffset="14">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
