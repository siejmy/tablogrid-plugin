import { registerBlockType } from "@wordpress/blocks"
import { InnerBlocks } from "@wordpress/block-editor"

export function initBlockTablogridMidline() {
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
						<InnerBlocks />
					</div>
				</div>
			)
		},
		save: ({ className }) => {
			return (
				<div className={className + " tgrow_prnt"}>
					<div className="tgrow midline">
						<InnerBlocks.Content />
					</div>
				</div>
			)
		},
	})
}
