import { registerBlockType } from "@wordpress/blocks"
import { InnerBlocks } from "@wordpress/block-editor"

export function initBlockTablogridColumn() {
	const allowedChildBlocks = [
		"siejmy/tablogrid-client-post",
		"siejmy/tablogrid-client-twitter"
	]
	registerBlockType("siejmy/tablogrid-column", {
		title: "Tablogrid column",
		description: "Column (internally used)",
		category: "layout",
		icon: "smiley",
		attributes: {
			columnIndex: {
				type: "string",
			},
		},
		supports: {
			inserter: false, // hide from palette
			html: false,
		},
		edit: ({ className, attributes }) => {
			return (
				<div
					className={
						className + " tgcol c" + attributes.columnIndex + " column"
					}
				>
					<InnerBlocks allowedBlocks={allowedChildBlocks} templateLock={false} />
				</div>
			)
		},
		save: ({ className, attributes }) => {
			return (
				<div
					className={
						className + " tgcol c" + attributes.columnIndex + " column"
					}
				>
					<InnerBlocks.Content />
				</div>
			)
		},
	})
}
