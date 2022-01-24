import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSong from "../queries/fetchSong";
import addLyricToSong from "../queries/addLyricToSong";

class LyricCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.id
      },
    })
    .then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit.bind(this)}
        >
          <label>Add a Lyric</label>
          <input
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);