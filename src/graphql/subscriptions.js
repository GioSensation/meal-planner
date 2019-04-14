import gql from 'graphql-tag'

// export const SUBSCRIBE_TO_DAY = gql`
//     subscription SubscribeToDay($id: ID!) {
//         day(where: {node: {id: $id}}) {
//             id
//             name
//             meals {name}
//         }
//     }
// `

export const SUBSCRIBE_TO_DAY = gql`
    subscription SubscribeToDay($id: ID!) {
        day(where: {node: {id: $id}}) {
            node {
                meals {name}
            }
        }
    }
`

// subscription {
//     day(where: { node: { id: "cjugme1axtwyh0b26n6bh57x1" } }) {
//         node { meals { id name } }
//     }
// }

// const NEW_MESSAGES_COUNT_CHANGED_SUBSCRIPTION = gql`
//   subscription onNewMessagesCountChanged($repoFullName: String!) {
//     newMessagesCount
//   }
// `;