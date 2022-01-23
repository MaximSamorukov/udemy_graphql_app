import React, { Component } from "react";

class CreateSong extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }
  render() {
    return (
      <div>
        <h3>Create new song</h3>
        <form>
          <label>Song title:</label>
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(this.state.title)}}
          >
            Add song
          </button>
        </form>
      </div>
    );
  }
}

export default CreateSong;