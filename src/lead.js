import { registerBlockType } from "@wordpress/blocks"
import { InnerBlocks } from "@wordpress/block-editor"

export function initLead() {
  registerBlockType("siejmy/lead", {
    title: "Lead H2",
    description: "Lead that has paragraph size but facilitates H2 tag",
    category: "text",
    icon: "smiley",
    supports: {
      html: false,
    },
    attributes: {
      content: {
        type: 'string',
        source: 'html',
        selector: 'p',
      },
    },
    example: {
      attributes: {
        content: 'This is a <strong>lead paragraph</strong> that looks like normal paragraph but has H2 html tag.',
      },
    },
    edit: (props) => {
      const {
        attributes: { content },
        setAttributes,
        className,
      } = props;
      const blockProps = useBlockProps();
      const onChangeContent = (newContent) => {
        setAttributes({ content: newContent });
      };
      return (
        <RichText
          {...blockProps}
          tagName="p"
          onChange={onChangeContent}
          value={content}
        />
      );
    },
    save: (props) => {
      const blockProps = useBlockProps.save();
      return (
        <RichText.Content
          {...blockProps}
          tagName="h2"
          value={props.attributes.content}
          className={className + " p lead"}
        />
      );
    },
  })
}
