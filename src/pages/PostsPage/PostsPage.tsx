import React, {useState} from 'react';
import {usePostsContext} from "../../hooks/usePostsContext";
import {Link, useSearchParams} from "react-router-dom";

const PostsPage = () => {
    const {posts} = usePostsContext();
    const [searchParams, setSearchParams] = useSearchParams()
    //  http://localhost:3000/posts?search=asdasd&first=true
    const searchQuery = searchParams.get('search') || ''
    const first = searchParams.has('first')

    const [search, setSearch] = useState<string>(searchQuery)
    const [checked, setChecked] = useState<boolean>(Boolean(first))

    const handleSubmit = () => {
        const params = {
            search: '',
            first: false
        }
        if(search.length) {
            params.search = search
        }
        if(checked) {
            params.first = checked
        }

        // @ts-ignore
        setSearchParams(params)
    }

    return (
        <div>
            <div style={{margin: '20px 10px'}}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{marginRight: '20px'}}
                    placeholder={'search post'}
                />
                <input checked={checked} onChange={(e) => {
                    setChecked(e.target.checked)
                }} type={"checkbox"}/>

                <button onClick={() => {
                    handleSubmit()
                }}>Submit</button>
            </div>
            <div>
                {posts
                    .filter(post => {
                        return post.title.includes(searchQuery)
                    })
                    .filter(post => {
                        if (first) {
                            return post.id < 20
                        }
                        return post
                    })
                    .map((post) => {
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
        </div>
    );
};

export default PostsPage;