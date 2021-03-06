import React from 'react';
import { MarkdownPreviewer } from './Components/MarkdownPreviewer';
import './App.css';
import sampleInput from './sampleInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: sampleInput
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src =
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    console.log(script);
  }

  render() {
    return (
      <div className='App'>
        <header>Markdown Previewer</header>
        <div id='container'>
          <div className='column'>
            <h2 id='editor-title'>Editor</h2>
            <div className='box'>
              <textarea
                id='editor'
                type='text'
                value={this.state.input}
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className='column'>
            <h2 id='preview-title'>Previewer</h2>
            <div className='box' id='preview-div'>
              <MarkdownPreviewer input={this.state.input} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
