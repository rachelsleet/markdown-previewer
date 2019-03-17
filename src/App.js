import React from 'react';
import { MarkdownPreviewer } from './Components/MarkdownPreviewer';
import './App.css';

let sampleInput = ` a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

# Header
## Header 2
[I work here](www.wayfair.co.uk)
\`\`\`
<div></div>
\`\`\`
- List 1
  - List 2 \`sneaky code\`
   - List 3

 >Blocking a quote!

![Christian](https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/49745714_2119476408108530_2252438745905102848_n.jpg?_nc_cat=101&_nc_ht=scontent-frx5-1.xx&oh=da603137e6bd1cc1551c0831d5511286&oe=5D1CA012)

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

  componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
        script.type = 'text/javascript'
        document.body.appendChild(script);
        console.log(script);
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
            <MarkdownPreviewer input={this.state.input}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}


export default App;
