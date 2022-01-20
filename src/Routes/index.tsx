import { Switch } from "react-router-dom";
import Login from "../Pages/Login";
import { Route } from "./Route";
import { useAuth } from "../Contexts/Auth/AuthContext";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";




/*import { PageNotFound } from "../pages/PageNotFound";
import { Dashboard } from "../pages/Dashboard";
import { Signup } from "../pages/Signup";
*/

export const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};


/*
<Route path="/signup" component={Signup} />
<Route component={PageNotFound} isPrivate={!!accessToken} />
*/