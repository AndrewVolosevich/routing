import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {usePostsContext} from "../../hooks/usePostsContext";
import {IPost} from "../../types";

const PostPage = () => {
    const {id} = useParams();
    const {posts} = usePostsContext();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    // const [post1, setPost1] = useState<IPost | null>(null);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(response => response.json())
    //         .then(json => setPost1(json))
    // }, [])

    const post2: IPost | null | undefined = useMemo(() => {
        return posts.length ? posts.find((post) => post.id === Number(id)) : null
    }, [posts])

    if (!post2) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2>User id: {post2.userId}</h2>
            <h2>Post id: {post2.id}</h2>
            <h2>Post title: {post2.title}</h2>
            <h2>Post body: {post2.body}</h2>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostPage;