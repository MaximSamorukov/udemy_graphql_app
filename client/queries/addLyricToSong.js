import gql from 'graphql-tag';

const addLyricToSong = gql`
  mutation addLyricToSong($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;


export default addLyricToSong