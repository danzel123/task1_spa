import React from "react";
import {
    HashRouter,
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import News from "./News"
import Auth from "../containers/Auth"
import Home from "./Home"
import AuthOk from "./AuthOk"

function App({authBool}) {
    console.log(authBool)
  return (
      <>
      <HashRouter>
          <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/news">News</NavLink>
                </li>
                <li>
                  <NavLink to="/auth">Auth</NavLink>
                </li>
            </ul>
          </nav>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <PrivateRoute path="/news" authBool={authBool}>
                  <News />
              </PrivateRoute>
              <Route path="/auth" render={() => authBool ? <AuthOk/> : <Auth />}>

              </Route>
          </Switch>
      </HashRouter>
          </>
  );
}


function PrivateRoute({authBool, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authBool ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default App;
