import Icon from "../../Icon";

export default function AlignCenter({
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
		<path d="M12 5h7M12 5h-7" stroke-dasharray="10">
			<animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="10;0" />
		</path>
		<path d="M12 10h5M12 10h-5" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 15h9M12 15h-9" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 20h7M12 20h-7" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
