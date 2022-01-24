import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs.js';
import deleteSong from "../queries/deleteSong.js";

class LyricsList extends Component {
  onLike(id) {
    console.log(id);
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
                <i
                  onClick={() => this.onLike(item.id)}
                  className="material-icons"
                >
                  thumb_up
                </i>
              </li>
            )
          })}

        </ul>
      </div>
    )
  }
}



export default LyricsList;
