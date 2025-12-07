import React from "react";

/**
 * Utility function to parse text with HTML tags and render them as React elements
 * Safer alternative to dangerouslySetInnerHTML
 */
export function parseTextWithHTMLTags(text: string): React.ReactNode {
  // Split by <b> and </b> tags
  const parts = text.split(/(<b>|<\/b>|<br\/>|<hr\/>)/g);
  const elements: React.ReactNode[] = [];
  let isBold = false;
  let currentText = "";

  parts.forEach((part, index) => {
    if (part === "<b>") {
      if (currentText) {
        elements.push(currentText);
        currentText = "";
      }
      isBold = true;
    } else if (part === "</b>") {
      if (currentText) {
        elements.push(
          <span key={`bold-${index}`} className="font-bold text-secondaryDark">
            {currentText}
          </span>
        );
        currentText = "";
      }
      isBold = false;
    } else if (part === "<br/>") {
      elements.push(<br key={`br-${index}`} />);
    } else if (part === "<hr/>") {
      elements.push(<hr key={`hr-${index}`} />);
    } else if (part) {
      if (isBold) {
        currentText += part;
      } else {
        elements.push(part);
      }
    }
  });

  // Add any remaining text
  if (currentText) {
    elements.push(currentText);
  }

  return <>{elements}</>;
}

