import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function CommentList({ comments, title }) {
//   if (!comments.length) {
//     return <h3>No Comments Yet</h3>;
//   }

  return (
      <>
        <Container>
            <h3>{title}</h3>
            {comments &&
                comments.map((comment) => (
                <div key={comment._id}>
                    <p>
                    {comment.username} commented on {comment.createdAt}
                    </p>
                {/* </div> */}
                    
                {/* <div> */}
                    <Link>
                        <p>{comment.commentBody}</p>
                        <p>Reactions: Click to{' '} {'see'} the discussion.</p>
                    </Link>
                </div>
            ))}
        </Container>
    </>
  );
}
