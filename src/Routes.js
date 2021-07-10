import { Redirect, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;
