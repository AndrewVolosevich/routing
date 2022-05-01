import React, {useContext} from 'react';
import {PostsContext} from "../pages/hoc/PostsContext/PostsContext";

export const usePostsContext = () => {
    return useContext(PostsContext);
};
