import React, {Component} from 'react';

import './searcher.css';

export default class Searcher extends Component {
  
  state = {
    term:""
  }

  onSearchChange = (event) => {
    const term = event.target.value.replace(/[^aA-zZ]/g,'');
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <input
        className = "form-control search-input"
        type = "search"
        placeholder = "type to search..."
        value = {this.state.term}
        onChange = {this.onSearchChange} />
    )
  }


};
