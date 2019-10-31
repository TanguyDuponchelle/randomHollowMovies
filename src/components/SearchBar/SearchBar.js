import React, { Component } from "react";
import logo from "./death.png";
import "./Searchbar.css";
import SwitchButton from "../SwitchButton/SwitchButton";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.inputText);
  };
  render() {
    return (
      <div>
        <nav className="NavBar">
          <ul className="NavBar__list">
            <li className="NavBar__logo">
              <img src={logo} alt="logo" />
              <h1 className="NavBar__site_name">Horror teaser</h1>
            </li>
            <li>
              <SwitchButton />
            </li>
            <li className="NavBar__search_items">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="NavBar__search"
                  placeholder="Search for..."
                  onChange={this.handleChange}
                  name="searchVideo"
                  id="searchVideo"
                  type="text"
                  value={this.props.value}
                />
                <input
                  className="Navbar__searchButton"
                  value="&#9762;"
                  type="submit"
                  onSubmit={this.handleSubmit}
                />
              </form>
            </li>
</ul>
        </nav>
      </div>
    );
  }
}
export default SearchBar;
