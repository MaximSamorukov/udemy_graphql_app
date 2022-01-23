import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs.js';
import deleteSong from "../queries/deleteSong.js";

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({
      variables: {
        id,
      },
      refetchQueries: [
        {
          query
        }
      ]
    })
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
            <li className="collection-item" key={i.id}>
              {i.title}
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
