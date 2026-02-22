import Icon from "../../Icon";

export default function HazardLightsOffTwotone({
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
      <defs>
		<mask id="SVGXl1rtdlA">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 10l4 7h-8Z" stroke="currentColor" fill="currentColor" fill-opacity="0" stroke-dasharray="28">
					<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="28;0" />
					<animate attributeName="fill-opacity" begin="1s" dur="0.15s" fill="freeze" to="0.3" />
				</path>
				<g fill="none">
					<path d="M12 4l9.25 16h-18.5Z" stroke="currentColor" opacity="0">
						<set attributeName="opacity" to="1" begin="0.4s" fill="freeze" />
						<animate attributeName="d" begin="0.4s" dur="0.2s" fill="freeze" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z" />
					</path>
					<path d="M0 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
						<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" fill="freeze" to="0" />
					</path>
				</g>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGXl1rtdlA)" />
	<path d="M0 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
