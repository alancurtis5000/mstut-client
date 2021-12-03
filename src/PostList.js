import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = Object.values(posts).map((post) => {
        return (
            <div className="card" key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
                <CommentCreate postId={post.id} />
                <CommentList comments={post.comments} />
            </div>
        )
    })

    return (
        <div className="post-lists">
            {renderPosts}
        </div>
    )
}

export default PostList;