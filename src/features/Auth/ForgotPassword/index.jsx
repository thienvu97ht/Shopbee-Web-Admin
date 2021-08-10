import NotFound from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage";

ForgotPasswordFeature.propTypes = {};

function ForgotPasswordFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ForgotPasswordPage} exact />
        <Route
          path={`${match.path}/new-password`}
          component={NewPasswordPage}
          exact
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ForgotPasswordFeature;
