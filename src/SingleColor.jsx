import { toast } from "react-toastify";

function SingleColor({ color, index }) {
	console.log(color);
	const { hex, weight } = color;

	async function saveToClipboard() {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success("Color copied to clipboard");
			} catch (error) {
				toast.error("Failed to copy color to clipboard");
			}
		} else {
			toast.error("Clipboard is not available");
		}
	}

	return (
		<article
			className={index > 20 ? "color color-light" : "color"}
			style={{ background: `#${hex}` }}
			onClick={saveToClipboard}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
		</article>
	);
}
export default SingleColor;
