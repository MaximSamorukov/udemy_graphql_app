import gql from 'graphql-tag';

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


export default query