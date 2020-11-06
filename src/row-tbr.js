import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export function initBlockTablogridTBR() {
	const BLOCK_TEMPLATE = [
		["siejmy/tablogrid-column", { columnIndex: "1" }],
		["siejmy/tablogrid-column", { columnIndex: "2" }],
		["siejmy/tablogrid-column", { columnIndex: "3" }],
	];

	registerBlockType("siejmy/tablogrid-row-tbr", {
		title: "Tablogrid TBR",
		description: "Top-bottom-right container",
		category: "layout",
		icon: "smiley",
		supports: {
			html: false,
		},
		edit: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow tbr">
						<InnerBlocks template={BLOCK_TEMPLATE} templateLock="all" />
					</div>
				</div>
			);
		},
		save: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow tbr">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	});
}
