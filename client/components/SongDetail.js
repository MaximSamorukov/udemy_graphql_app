import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricsList from "./LyricsList";

class SongDetail extends Component {

  render() {
    const { loading, song } = this.props.data;
    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    console.log(this.props.data);
    return (
      <div>
        <Link to="/" >Back</Link>
        <div>
          <h3>Song Detail</h3>
          <div>
            {`Title: ${song.title}`}
          </div>
          <div>
            {`id: ${song.id}`}
          </div>
          <LyricCreate id={song.id} />
          <LyricsList lyrics={song.lyrics} />
        </div>

      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: {
        id: props.params.id,
      }
    }
  }
})(SongDetail);