import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export function initBlockTablogridMidline() {
	const BLOCK_TEMPLATE = [["siejmy/tablogrid-column", { columnIndex: "1" }]];

	registerBlockType("siejmy/tablogrid-row-midline", {
		title: "Tablogrid Midline",
		description: "Midline container",
		category: "layout",
		icon: "smiley",
		supports: {
			html: false,
		},
		edit: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow midline">
						<InnerBlocks template={BLOCK_TEMPLATE} templateLock="all" />
					</div>
				</div>
			);
		},
		save: ({ className }) => {
			return (
				<div className={className + "tgrow_prnt"}>
					<div className="tgrow midline">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	});
}
