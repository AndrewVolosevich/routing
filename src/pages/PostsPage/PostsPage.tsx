import React from 'react';
import {usePostsContext} from "../../hooks/usePostsContext";
import {Link} from "react-router-dom";

const PostsPage = () => {
    const {posts} = usePostsContext();

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {`${post.id}  ${post.title}`}
                        </Link>
                        <br />

                    </div>
                )
            })}
        </div>
    );
};

export default PostsPage;