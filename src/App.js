import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate.Component";
import StreamDelete from "./components/streams/StreamDelete.Component";
import StreamEdit from "./components/streams/StreamEdit.Component";
import StreamLits from "./components/streams/StreamList.Component";
import StreamShow from "./components/streams/StreamShow.Component";
import Header from "./components/Header";
const App = props => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <>
          <Header />
          <Route path="/" exact component={StreamLits} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </>
      </BrowserRouter>
    </div>
  );
};
export default App;
