import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from "../queries/fetchSongs";
import addSong from "../queries/addSong";
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
        <Link to="/">Back</Link>
        <h3>Create new song</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.mutate({
              variables: {
                title: this.state.title,
              },
              refetchQueries: [
                {
                  query
                }
              ]
            })
              .then(() => {
                hashHistory.push('/');
              })
              .catch(() => {
                console.log('Error');
              })
          }}

        >
          <label>Song title:</label>
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(CreateSong);