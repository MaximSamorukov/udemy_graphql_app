import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs.js';
import deleteSong from "../queries/deleteSong.js";

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({
      variables: {
        id,
      },
    })
    .then(() => this.props.data.refetch());

  }
  renderSongs() {
    const { loading, songs = [] } = this.props.data;
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <ul className="collection">
          {songs.map((i) => (
            <li
              className="collection-item"
              key={i.id}
            >
              <Link to={`/songs/${i.id}`}>
                {i.title}
              </Link>
              <i
                className="material-icons"
                onClick={() => this.onSongDelete(i.id)}
              >
                delete
              </i>
            </li>
          ))}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
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



export default graphql(deleteSong)(
  graphql(query)(SongList)
);
