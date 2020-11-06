import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export function initBlockTablogridUno() {
	const BLOCK_TEMPLATE = [["siejmy/tablogrid-column", { columnIndex: "1" }]];

	registerBlockType("siejmy/tablogrid-row-uno", {
		title: "Tablogrid UNO",
		description: "Uno container",
		category: "layout",
		icon: "smiley",
		supports: {
			html: false,
		},
		edit: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow uno">
						<InnerBlocks template={BLOCK_TEMPLATE} templateLock="all" />
					</div>
				</div>
			);
		},
		save: ({ className }) => {
			return (
				<div className={className + "tgrow_prnt"}>
					<div className="tgrow uno">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	});
}
