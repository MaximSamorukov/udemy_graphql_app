import gql from 'graphql-tag';

const fetchSong = gql`
  query fetchSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        content
        id
      }
    }
  }
`;


export default fetchSong;