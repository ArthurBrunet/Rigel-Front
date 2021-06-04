import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Style/Normalize.css'
import "./Style/App.css"
import {HomeScreen} from "./Template/Screen/HomeScreen";
import {DirectoryScreen} from "./Template/Screen/DirectoryScreen";
import {ChatScreen} from "./Template/Screen/ChatScreen";
import {IdeaBoxScreen} from "./Template/Screen/IdeaBoxScreen";

export default function App() {
    return (
        <Router>
            <div>
                <header>
                    <h2>Rigel</h2>
                    <div className={'profile'}>
                        <p>photo ici</p>
                        <p>icon ici</p>
                    </div>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/talk">Chats</Link>
                        </li>
                        <li>
                            <Link to="/directory">Annuaire</Link>
                        </li>
                        <li>
                            <Link to="/ideabox">Boîte à idées</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/">
                        <HomeScreen/>
                    </Route>
                    <Route path="/talk">
                        <ChatScreen/>
                    </Route>
                    <Route path="/directory">
                        <DirectoryScreen/>
                    </Route>
                    <Route path="/ideabox">
                        <IdeaBoxScreen/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
