import { Route, Switch } from 'react-router';
import About from './About';
import Blog from './Blog';
import Donate from './Donate';
import Home from './Home';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/donate">
        <Donate />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default Content;
