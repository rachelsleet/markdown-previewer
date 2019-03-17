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

![React Logo w/ Text](https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/49745714_2119476408108530_2252438745905102848_n.jpg?_nc_cat=101&_nc_ht=scontent-frx5-1.xx&oh=da603137e6bd1cc1551c0831d5511286&oe=5D1CA012)

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
        <div id="container">
        <div className="column">
          <h2 id="editor-title">Editor</h2>
          <div className="box">
            <textarea id="editor" type='text' value={this.state.input} onChange={this.handleInput}/>
          </div>
        </div>
        <div className="column">
          <h2 id="preview-title">Previewer</h2>
          <div className="box" id="preview-div">
            <Previewer input={this.state.input}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}



const Previewer = (props) => {
    return (
      <MarkdownPreview id="preview" value={props.input}/>
    )
}


export default App;
