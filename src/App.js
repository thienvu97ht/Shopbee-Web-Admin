import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginFeature from "features/Auth/Login";
import RegisterFeature from "features/Auth/Register";
import UserFeature from "features/User";
import ForgotPasswordFeature from "features/Auth/ForgotPassword";
import HomeFeature from "features/Home";
import NotFound from "components/NotFound";
import Header from "components/Header";
import CategoryFeature from "features/Category";
import ProductsFeature from "features/Products";
import SupportFeature from "features/Support";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomeFeature} exact />
        <Route path="/login" component={LoginFeature} />
        <Route path="/register" component={RegisterFeature} />
        <Route path="/user" component={UserFeature} />
        <Route path="/support" component={SupportFeature} />
        <Route path="/forgot-password" component={ForgotPasswordFeature} />
        <Route path="/products" component={ProductsFeature} />
        <Route path="/category" component={CategoryFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
