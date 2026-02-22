import Icon from "../../Icon";

export default function ChevronTripleUp({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="12">
		<path d="M12 2l-7 7M12 2l7 7">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="12;0" />
		</path>
		<path d="M12 8l-7 7M12 8l7 7" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
		</path>
		<path d="M12 14l-7 7M12 14l7 7" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
