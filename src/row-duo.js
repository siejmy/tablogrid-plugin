import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export function initBlockTablogridDuo() {
	const BLOCK_TEMPLATE = [
		["siejmy/tablogrid-column", { columnIndex: "1" }],
		["siejmy/tablogrid-column", { columnIndex: "2" }],
	];

	registerBlockType("siejmy/tablogrid-row-duo", {
		title: "Tablogrid DUO",
		description: "Duo left-right container",
		category: "layout",
		icon: "smiley",
		supports: {
			html: false,
		},
		edit: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow duo">
						<InnerBlocks template={BLOCK_TEMPLATE} templateLock="all" />
					</div>
				</div>
			);
		},
		save: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow duo">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	});
}
