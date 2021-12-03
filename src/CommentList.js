const CommentList = ({ comments }) => {

    const renderComments = Object.values(comments).map((comment) => {
        let content;
        switch (comment.status) {
            case 'pending': content = "* Comment Pending *"; break;
            case 'approved': content = comment.content; break;
            case 'rejected': content = "* Comment Rejected *"; break;
            default:
                break;
        }

        return (
            <li key={comment.id}>
                {content}
            </li>
        )
    })

    return (
        <ul className="comments-lists">
            {renderComments}
        </ul>
    )
}

export default CommentList;