import { registerBlockType } from "@wordpress/blocks"
import { InnerBlocks } from "@wordpress/block-editor"

export function initLead() {
  registerBlockType("siejmy/lead", {
    title: "Lead H2",
    description: "Lead that has paragraph size but facilitates H2 tag",
    category: "text",
    icon: "smiley",
    supports: {
      html: true,
    },
    edit: ({ className }) => {
      return (
        <p className={className}>
          <InnerBlocks />
        </p>
      )
    },
    save: ({ className }) => {
      return (
        <h2 className={className + " p lead"}>
          <InnerBlocks.Content />
        </h2>
      )
    },
  })
}
