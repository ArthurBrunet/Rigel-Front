import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './Style/Normalize.css'
import "./Style/App.css"
import {HomeScreen} from "./Template/Screen/HomeScreen";
import {DirectoryScreen} from "./Template/Screen/DirectoryScreen";
import {ChatScreen} from "./Template/Screen/ChatScreen";
import {IdeaBoxScreen} from "./Template/Screen/IdeaBoxScreen";
import {Header} from "./Template/Component/Header";

export default function App() {
    return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/home">
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
                </Switch>
            </Router>
    );
}
