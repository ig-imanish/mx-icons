import Icon from "../../Icon";

export default function FolderNetwork({
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
		<path d="M12 6h7c0.55 0 1 0.45 1 1v8c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-9Z" stroke-dasharray="54">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="54;0" />
		</path>
		<path d="M12 6h-8v-1c0 -0.55 0.45 -1 1 -1h5Z" opacity="0">
			<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
			<animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze" values="M12 6h-8v0c0 0 0.45 0 1 0h5Z;M12 6h-8v-1c0 -0.55 0.45 -1 1 -1h5Z" />
		</path>
		<path d="M12 16v5" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 21h9M12 21h-9" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="1s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M10 20h4v2h-4Z" opacity="0">
			<set attributeName="opacity" to="1" begin="1.2s" fill="freeze" />
			<animate attributeName="d" begin="1.2s" dur="0.2s" fill="freeze" values="M12 21h0v0h0Z;M10 20h4v2h-4Z" />
		</path>
	</g>
    </Icon>
  );
}
