import React from "react";
import {
    HashRouter,
    Switch,
    Route,
    NavLink,
    Redirect,
} from "react-router-dom";
import { Menu, MenuItem } from 'semantic-ui-react'
import "./App.css"
import News from "./News"
import Auth from "../containers/Auth"
import Home from "./Home"
import AuthOk from "../containers/AuthOk"

function App({authBool}) {
    console.log(authBool)
  return (
      <>
      <HashRouter>
      <header>
          <nav>
              <Menu pointing size="large">
                <MenuItem name="home">
                    <NavLink exact to="/">Главная</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/news">Новости</NavLink>
                </MenuItem>
                  {authBool ? 
                  <MenuItem position="right">
                      <NavLink to="/authOk" >Выход</NavLink>
                  </MenuItem>
              :
                  <MenuItem position="right">
                      <NavLink to="/auth">{"Вход"}</NavLink>
                  </MenuItem>
              }
            </Menu>
          </nav>
      </header>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/authOk">
                  {authBool && <Redirect to="/" /> }
              <AuthOk />
          </Route>
              <PrivateRoute path="/news" authBool={authBool}>
                  <News />
              </PrivateRoute>
              <Route path="/auth" render={() => authBool ? <AuthOk/> : <Auth />}>
                  {authBool ? <Redirect to="/news" /> : <Auth/>}
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
