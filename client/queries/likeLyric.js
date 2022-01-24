import gql from 'graphql-tag';

const likeLyric = gql`
  mutation likeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;


export default likeLyric