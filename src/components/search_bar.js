import React, { Component } from 'react';
import logo from '../img/youtube.png';
import searchIcons from '../img/search-icons.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
  }

  onInputChange = (event) => {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div id="search-bar">
        <img src={logo} alt="logo" />
        <input onChange={this.onInputChange} value={this.state.searchterm} placeholder="Search" />
        <img src={searchIcons} alt="icons" />
      </div>
    );
  }
}

export default SearchBar;
