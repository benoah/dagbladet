import React from "react";
import { Route, Switch } from "react-router-dom";
import { ArticleList } from "../ArticleList";
import { LiteArticleList } from "../LiteArticleList";

const App = () => (
  <Switch>
    <Route path="/" exact>
      <ArticleList />
    </Route>
    <Route path="/main" exact>
      <ArticleList />
    </Route>
    <Route path="/titles">
      <LiteArticleList />
    </Route>
  </Switch>
);

export default App;
