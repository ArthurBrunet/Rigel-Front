import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Style/Normalize.css'
import "./Style/App.css"

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
                            <Link to="/users">Annuaire</Link>
                        </li>
                        <li>
                            <Link to="/ideabox">Boîte à idées</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
