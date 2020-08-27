import gql from 'graphql-tag';

export const QUERY_COMMENTS = gql`
    query get comments($task: ID){
        comments(task: $task) {
            _id
            commentBody
            user {
                _id
            }
            tasks {
                _id
            }
        }
}`;

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