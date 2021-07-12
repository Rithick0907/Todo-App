import { Redirect, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/Signup";
import { useSelector } from "react-redux";
import { userSelector } from "./store/user";

const Routes = () => {
  const user = useSelector(userSelector);
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/main"
        render={(props) => (user ? <Main /> : <Redirect to="/login" />)}
      />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;
