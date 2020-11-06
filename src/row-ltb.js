import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export function initBlockTablogridLTB() {
	const BLOCK_TEMPLATE = [
		["siejmy/tablogrid-column", { columnIndex: "1" }],
		["siejmy/tablogrid-column", { columnIndex: "2" }],
		["siejmy/tablogrid-column", { columnIndex: "3" }],
	];

	registerBlockType("siejmy/tablogrid-row-ltb", {
		title: "Tablogrid LTB",
		description: "Left-top-bottom container",
		category: "widgets",
		icon: "smiley",
		supports: {
			html: false,
		},
		edit: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow ltb">
						<InnerBlocks template={BLOCK_TEMPLATE} templateLock="all" />
					</div>
				</div>
			);
		},
		save: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow ltb">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	});
}
