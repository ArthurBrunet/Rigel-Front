import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/Normalize.css";
import "./Style/App.css";
import { HomeScreen } from "./Template/Screen/HomeScreen";
import { LoginScreen } from "./Template/Screen/LoginScreen";
import { DirectoryScreen } from "./Template/Screen/DirectoryScreen";
import { ChatScreen } from "./Template/Screen/ChatScreen";
import { IdeaBoxScreen } from "./Template/Screen/IdeaBoxScreen";
import { Header } from "./Template/Component/Header";
import { RegisterScreen } from "./Template/Screen/RegisterScreen";
import {useAuth} from "./Store/Auth/auth";

export default function App() {
  // const [isLogged, setIsLogged] = useState(false)
  let auth = useAuth();
  console.log("LE TEST auth.state.isLoggedIn");
  console.log(auth.state.isLoggedIn);
  const [displayHeader, setDisplayHeader] = useState(false);
  const pathname = window.location.pathname;
  console.log(displayHeader);

  useEffect(() => {
    if (pathname !== '/login' && pathname !== '/register') {
      setDisplayHeader(true);
    }
  }, []);
  return (
    <Router>
      {
        displayHeader && (<Header />)
      }
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

        <Route exact path="/talk">
          <ChatScreen />
        </Route>
        <Route exact path="/directory">
          <DirectoryScreen />
        </Route>
        <Route exact path="/ideabox">
          <IdeaBoxScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/register">
          <RegisterScreen />
        </Route>
      </Switch>
    </Router>
  );
}
