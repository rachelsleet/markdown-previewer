import React from 'react';
import marked from 'marked';

export const MarkdownPreviewer = (props) => {
      return <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.input)}} />;
}
