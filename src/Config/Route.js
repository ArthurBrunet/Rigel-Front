import React, {useState} from 'react'
import {Header} from "../Template/Component/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomeScreen} from "../Template/Screen/HomeScreen";
import {ChatScreen} from "../Template/Screen/ChatScreen";
import {DirectoryScreen} from "../Template/Screen/DirectoryScreen";
import {IdeaBoxScreen} from "../Template/Screen/IdeaBoxScreen";
import {LoginScreen} from "../Template/Screen/LoginScreen";
import {RegisterScreen} from "../Template/Screen/RegisterScreen";
import {useAuth} from "../Store/Auth/auth";
import NewUserScreen from "../Template/Screen/NewUserScreen";


const RouteConfig = () => {
    let auth = useAuth();
    return (
        <Router>
            {auth.state.isLoggedIn && (<Header/>)}
            <Switch>
                {auth.state.isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <HomeScreen/>
                        </Route>
                        <Route exact path="/talk">
                            <ChatScreen/>
                        </Route>
                        <Route exact path="/directory">
                            <DirectoryScreen/>
                        </Route>
                        <Route exact path="/ideabox">
                            <IdeaBoxScreen/>
                        </Route>
                        <Route exact path="/newUser">
                            <NewUserScreen/>
                        </Route>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <LoginScreen/>
                        </Route>
                        <Route exact path="/register">
                            <RegisterScreen/>
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    )
}

export default RouteConfig;
