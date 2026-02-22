import Icon from "../../Icon";

export default function EmojiSmileWinkFilled({
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
		<mask id="SVG76udjbWC">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9" stroke="currentColor" fill="currentColor" stroke-dasharray="60" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
					<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<g fill="none" stroke="currentColor">
					<g stroke-dasharray="4">
						<path d="M9 9v1" stroke-dashoffset="4">
							<animate attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" fill="freeze" to="0" />
						</path>
						<path d="M14.5 9.5h1" stroke-dashoffset="4">
							<animate attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" fill="freeze" to="0" />
						</path>
					</g>
					<path d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3" stroke-dasharray="14" stroke-dashoffset="14">
						<animate attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" fill="freeze" to="0" />
					</path>
				</g>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG76udjbWC)" />
    </Icon>
  );
}
