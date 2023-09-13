import React from "react";

/**
 * Props for the ContentRenderer component.
 *
 * @interface ContentRendererProps
 * @property {string} content - The content to render as HTML.
 */
interface ContentRendererProps {
  content: {
    rendered: string;
  };
}

/**
 * ContentRenderer component for rendering HTML content.
 *
 * @param {ContentRendererProps} props - The props for the ContentRenderer component.
 * @returns {JSX.Element} A JSX element representing the rendered content.
 * @component
 */
const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
}: ContentRendererProps): JSX.Element => {
  return (
    <div
      itemProp="articleBody"
      className="content"
      dangerouslySetInnerHTML={{ __html: content.rendered }}
    />
  );
};

export default ContentRenderer;
