import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
        <textarea type='text' value={this.state.input} onChange={this.handleInput}/>
        <Previewer input={this.state.input}/>
      </div>
    );
  }
}



class Previewer extends React.Component {
  render() {
    return (
      <MarkdownPreview value={this.props.input}/>
    )
  }
}

export default App;
