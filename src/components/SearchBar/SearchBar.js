import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "highest_rated",
      "Most Reviewed": "most_reviewed",
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange(sortByOption) {
    let newState = this.state;
    newState.sortBy = sortByOption;

    this.setState(newState);
  }

  handleTermChange(event) {
    let newState = this.state;
    newState.term = event.target.value;
    this.setState(newState);
  }

  handleLocationChange(event) {
    let newState = this.state;
    newState.location = event.target.value;
    this.setState(newState);
  }

  handleSearch(event) {
    event.preventDefault();
    let term = this.state.term;
    let { location } = this.state;
    let { sortBy } = this.state;
    return this.props.searchYelp(term, location, sortBy);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((option, i) => {
      let sortBy = this.sortByOptions[option];
      return (
        <li
          className={this.getSortByClass(sortBy)}
          key={sortBy + i}
          onClick={this.handleSortByChange.bind(this, sortBy)}
        >
          {option}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search Businesses"
          />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
