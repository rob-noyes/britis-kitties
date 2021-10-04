import { BrowserRouter, Route } from 'react-router-dom';
import OnePost from '../Posts/OnePost';
import AllPosts from '../Posts/AllPosts';

const Blog = () => {
  return (
    <BrowserRouter>
      <div id="blog">
        <Route component={AllPosts} path="/blog" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
};
export default Blog;
