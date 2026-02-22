import Icon from "../../Icon";

export default function BackupRestore({
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
      <path d="M4.25 14c0.89 3.45 4.02 6 7.75 6c4.42 0 8 -3.58 8 -8c0 -4.42 -3.58 -8 -8 -8c-2.39 0 -4.53 1.05 -6 2.71l-2 2.29" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0" />
	</path>
	<g fill="currentColor">
		<path d="M5.63 7.38l-2.13 -2.13l0 4.25l4.25 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" opacity="0">
			<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
			<animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze" values="M4 9l0 0l0 0l0 0Z;M5.63 7.38l-2.13 -2.13l0 4.25l4.25 0Z" />
		</path>
		<circle cx="12" cy="12">
			<animate attributeName="r" begin="0.8s" dur="0.2s" fill="freeze" to="2" />
		</circle>
	</g>
    </Icon>
  );
}
