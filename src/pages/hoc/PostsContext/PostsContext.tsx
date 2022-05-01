import React, {createContext, useEffect, useMemo, useState} from 'react';
import {IPost} from "../../../types";

const initialValue: {posts: IPost[]} = {
    posts: []
}
export const PostsContext = createContext(initialValue)

const PostsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    const value = useMemo(() => {
        return {
            posts
        }
    }, [posts])

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;