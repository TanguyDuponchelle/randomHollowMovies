import React from "react";
import './SwitchBottom.css'

class SwitchBottom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  render() {
    return (
      <div className="switch-container">
        <div className="container">
          <input
            ref="switch"
            checked={this.state.isChecked}
            onChange={this._handleChange}
            className="switch"
            type="checkbox"
            id="toogle1"
          />
          <label htmlFor="toogle1" className="switch_label">{`${this.state.isChecked?"on":"off"}`}</label>
        </div>
      </div>
    );
  }

  _handleChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
}

export default SwitchBottom;
