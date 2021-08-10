import NotFound from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";

function ProductsFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ProductListPage} exact />
        <Route path={`${match.path}/add`} component={ProductPage} exact />
        <Route
          path={`${match.path}/add/:productID`}
          component={ProductPage}
          exact
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ProductsFeature;
