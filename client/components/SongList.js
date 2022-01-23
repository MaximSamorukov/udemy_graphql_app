import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    const { loading, songs = [] } = this.props.data;
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <ul className="collection">
        {songs.map((i) => <li className="collection-item" key={i.id}>{i.title}</li>)}
      </ul>
    )
  }
  render() {

    return (
      <div>
        {this.renderSongs()}
      </div>
    )
  }
}

const query = gql`
  {
    songs {
      id,
      title,
      lyrics {
        content
      }
    }
  }
`;

export default graphql(query)(SongList);