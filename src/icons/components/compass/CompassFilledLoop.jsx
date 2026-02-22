import Icon from "../../Icon";

export default function CompassFilledLoop({
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
		<mask id="SVG0y2OyebF">
			<path d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
				<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<path d="M11 11l1 1l1 1l-1 -1Z" fill="currentColor" transform="rotate(-180 12 12)">
				<animate attributeName="d" begin="1.1s" dur="0.3s" fill="freeze" to="M10.2 10.2l6.8 -3.2l-3.2 6.8l-6.8 3.2Z" />
				<animateTransform attributeName="transform" type="rotate" begin="1.1s" dur="9s" repeatCount="indefinite" keyTimes="0;0.8;0.3;0.36;0.42;0.5;0.58;0.65;0.76;0.84;0.92;1" values="-180 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12" />
			</path>
		</mask>
	</defs>
	<g fill="currentColor">
		<path d="M0 0h24v24H0z" mask="url(#SVG0y2OyebF)" />
		<circle cx="12" cy="12">
			<animate attributeName="r" begin="1.1s" dur="0.3s" fill="freeze" to="1" />
		</circle>
	</g>
    </Icon>
  );
}
