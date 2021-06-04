import {
    Link
} from "react-router-dom";

export function Header() {
    return (
        <>
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
        </>
    )
}
