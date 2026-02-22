import Icon from "../../Icon";

export default function MinusCircleFilled({
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
		<mask id="SVG4q6gJcDZ">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" stroke="currentColor" fill="currentColor" stroke-dasharray="60" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
					<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M7 12h10" stroke="currentColor" fill="none" stroke-dasharray="12" stroke-dashoffset="12">
					<animate attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG4q6gJcDZ)" />
    </Icon>
  );
}
