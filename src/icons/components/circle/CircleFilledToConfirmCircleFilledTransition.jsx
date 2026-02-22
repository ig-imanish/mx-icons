import Icon from "../../Icon";

export default function CircleFilledToConfirmCircleFilledTransition({
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
		<mask id="SVGWyEYmdeF">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" stroke="currentColor" fill="currentColor" />
				<path d="M8 12l3 3l5 -5" stroke="currentColor" fill="none" stroke-dasharray="14">
					<animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="14;0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGWyEYmdeF)" />
    </Icon>
  );
}
