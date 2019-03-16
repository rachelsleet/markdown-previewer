import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import './App.css';

let sampleInput = ` a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

# Header
## Header 2
[I work here](www.wayfair.co.uk)
\`\`\`
<div></div>
\`\`\`
- List 1
  - List 2
   - List 3

 >Blocking a quote!

![React Logo w/ Text](https://goo.gl/Umyytc)

**pretty neat**
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: sampleInput
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          Markdown Previewer
        </header>
        <textarea id="editor" type='text' value={this.state.input} onChange={this.handleInput}/>
        <Previewer input={this.state.input}/>
      </div>
    );
  }
}



class Previewer extends React.Component {
  render() {
    return (
      <MarkdownPreview id="preview" value={this.props.input}/>
    )
  }
}

export default App;
