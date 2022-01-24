import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs.js';
import deleteSong from "../queries/deleteSong.js";
import likeLyric from "../queries/likeLyric.js";

class LyricsList extends Component {
  onLike(id, likes = 0) {
    this.props.mutate({
      variables: {
        id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        }
      }
    })
  }

  render() {

    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map((item) => {
            return (
              <li
                className="collection-item"
                key={item.id}
              >
                {item.content}
                <div className="vote-box">
                  <i
                    onClick={() => this.onLike(item.id, item.likes)}
                    className="material-icons"
                    >
                    thumb_up
                  </i>
                  {item.likes || 0}
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    )
  }
}



export default graphql(likeLyric)(LyricsList);
