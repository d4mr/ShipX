import gql from 'graphql-tag';

const GET_SHIPS = gql`
    query ships($limit: Int!) {
       ships(limit : $limit) {
        id
        name
        image
        type
        weight_kg
        active
        url
       }
    }
`

export default GET_SHIPS;