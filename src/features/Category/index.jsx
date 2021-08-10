import NotFound from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import CategoryPage from "./pages/CategoryPage";

function CategoryFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={CategoryListPage} exact />
        <Route path={`${match.path}/add`} component={CategoryPage} exact />
        <Route
          path={`${match.path}/add/:categoryID`}
          component={CategoryPage}
          exact
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default CategoryFeature;
