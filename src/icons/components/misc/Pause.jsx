import Icon from "../../Icon";

export default function Pause({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="30">
		<path d="M7 6h2v12h-2Z">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="30;0" />
		</path>
		<path d="M15 6h2v12h-2Z" stroke-dashoffset="30">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
