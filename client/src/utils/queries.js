import gql from 'graphql-tag';

export const QUERY_COMMENTS = gql`
    query comments($username: String) {
        comments(username: $username) {
            _id
            commentBody
            createdAt
            username
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_COMMENT = gql`
    query comment($id: ID!) {
        comment(_id: $id) {
            _id
            commentBody
            createdAt
            username
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_ALL_TASKS = gql`
{
    tasks {
        _id
        taskName
        user {
            _id
        }
    }
}`;

export const QUERY_USER = gql`
{
    user {
        firstName
        lastName
        username
        email
        tasks {
            _id
            taskName
        }
        comments {
            _id
            commentBody
        }
    }
}`;

// export const QUERY_GROUP = gql`
// {

// }`