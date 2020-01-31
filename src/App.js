import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import StreamCreate from "./components/streams/StreamCreate.Component";
import StreamDelete from "./components/streams/StreamDelete.Component";
import StreamEdit from "./components/streams/StreamEdit.Component";
import StreamLits from "./components/streams/StreamList.Component";
import StreamShow from "./components/streams/StreamShow.Component";
import Header from "./components/Header";
const App = props => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamLits} />
          <Route path="/streams" exact component={StreamLits} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
