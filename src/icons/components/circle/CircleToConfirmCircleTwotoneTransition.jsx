import Icon from "../../Icon";

export default function CircleToConfirmCircleTwotoneTransition({
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" fill="currentColor" fill-opacity="0.3">
			<animate attributeName="fill-opacity" dur="0.2s" fill="freeze" values="0;0.3" />
		</path>
		<path d="M8 12l3 3l5 -5" fill="none" stroke-dasharray="14" stroke-dashoffset="14">
			<animate attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
