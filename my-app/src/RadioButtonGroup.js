import React, { Component } from "react";

class RadioButtonGroup extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption:" "
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Option1"
              checked={this.state.selectedOption === "Option1"}
              onChange={this.onValueChange}
            />
            Option1
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Option2"
              checked={this.state.selectedOption === "Option2"}
              onChange={this.onValueChange}
            />
            Option2
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Option3"
              checked={this.state.selectedOption === "Option3"}
              onChange={this.onValueChange}
            />
            Option3
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default RadioButtonGroup;

