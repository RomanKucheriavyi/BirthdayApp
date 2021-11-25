import React, {Component} from 'react';

import './searcher.css';

export default class Searcher extends Component {

    state = {
        searchText:""
    }

    onSearchChange = (event) => {
        const searchText = event.target.value.replace(/[^aA-zZ]/g,'');
        this.setState({searchText});
        this.props.onSearchChange(searchText);
    }

    render() {
        return (
        <input
            className = "form-control search-input"
            type = "search"
            placeholder = "type to search..."
            value = {this.state.searchText}
            onChange = {this.onSearchChange} />
        )
    }


};
