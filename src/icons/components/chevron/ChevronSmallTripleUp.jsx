import Icon from "../../Icon";

export default function ChevronSmallTripleUp({
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
		<path d="M12 14l-5 5M12 14l5 5">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="10;0" />
		</path>
		<path d="M12 9l-5 5M12 9l5 5" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
		</path>
		<path d="M12 4l-5 5M12 4l5 5" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
