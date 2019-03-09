import showPosts from './components/showPosts';
import addPost from './components/addPost';
import listPostsTitle from './components/listPosts';
import singlePost from './components/singlePost';

export default [
    {
        path: '/',
        component: showPosts
    },
    {
        path: '/add-post',
        component: addPost
    },
    {
        path: '/list-post-title',
        component: listPostsTitle
    },
    {
        path: '/post/:id',
        component: singlePost
    }
]