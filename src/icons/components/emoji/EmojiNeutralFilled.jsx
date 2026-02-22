import Icon from "../../Icon";

export default function EmojiNeutralFilled({
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
		<mask id="SVGyDQSoeuK">
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
						<path d="M15 9v1" stroke-dashoffset="4">
							<animate attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" fill="freeze" to="0" />
						</path>
					</g>
					<path d="M8 15h8" stroke-dasharray="10" stroke-dashoffset="10">
						<animate attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" fill="freeze" to="0" />
					</path>
				</g>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGyDQSoeuK)" />
    </Icon>
  );
}
