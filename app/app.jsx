const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");

const Main = require("./components/Main");
const About = require("./components/About");
const Example = require("./components/Example");

// Load Foundation css
// require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// Load css
require("style!css!sass!appStyles");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Example}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById("app")
);
