import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import PostsPage from "../PostsPage/PostsPage";
import UsersPage from "../UsersPage/UsersPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Layout from "../../components/Layout/Layout";
import PostPage from "../PostPage/PostPage";
import UserPage from "../UserPage/UserPage";
import SecuredPage from "../SecuredPage/SecuredPage";
import RequiredAuth from "../hoc/RequiredAuth/RequiredAuth";
import LoginPage from "../LoginPage/LoginPage";

const AppController = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path={'posts'} element={<PostsPage />} />
                    {/*<Route path={'posts-old'} element={<Navigate to={'/posts'} replace />} />*/}
                    <Route path={'posts/:id'} element={<PostPage />} />
                    <Route path={'users'} element={<UsersPage />} />
                    <Route path={'login'} element={<LoginPage />} />
                    <Route path={'users/:id'} element={<UserPage />} />
                    <Route path={'secret'} element={
                        <RequiredAuth>
                            <SecuredPage />
                        </RequiredAuth>
                    } />
                    <Route path={'*'} element={<NotFoundPage />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
};

export default AppController;