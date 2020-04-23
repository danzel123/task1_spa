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
import News from "../containers/News"
import Auth from "../containers/Auth"
import Home from "./Home"

function App({authBool, activeItem, changeItem, logOff}) {
    function exit(){
        changeItem('home');
        logOff();
    }

  return (
      <>
      <HashRouter>
      <header>
              <Menu  size="large">
                <MenuItem name="home" active={activeItem === "home"} >
                    <NavLink exact to="/" onClick={changeItem.bind(this, 'home')}>Главная</NavLink>
                </MenuItem>
                <MenuItem name="news" active={activeItem === "news"} >
                  <NavLink  to="/news">Новости</NavLink>
                </MenuItem>
                  {authBool ? 
                  <MenuItem position="right" name="authOk" active={activeItem === "authOk"} onClick={exit}>
                      <NavLink to="/" >Выход</NavLink>
                  </MenuItem>
                      :
                  <MenuItem position="right" name="auth" active={activeItem === "auth"} >
                      <NavLink to="/auth" onClick={changeItem.bind(this, 'auth')}>Вход</NavLink>
                  </MenuItem>
              }
            </Menu>
      </header>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <PrivateRoute path="/news" authBool={authBool}>
                  <News />
              </PrivateRoute>
              <Route path="/auth" render={() => <Auth />}>
                  {authBool ? (changeItem.bind(this, 'news') && <Redirect to="/news" />) : <Auth/>}
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
