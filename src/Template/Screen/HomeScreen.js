import Apero from '../Component/apero';
import Title from "../Component/Title";
import Stickman from "../../Assets/perso_orion.svg";

export function HomeScreen() {
    return (
        <>
            <Apero/>
            <Title title={'Accueil'}/>
            <div className={"homeBox"}>
                <img
                    className={'stickOrion'}
                    src={Stickman}
                    alt="Icone orion"/>
                <h2>Bienvenue sur Sirius</h2>
                <p><span>Sirius</span> est une plateforme qui a pour objectif d'être votre happiness officer en ligne.<br/>
                    Ici, vous pouvez accéder aux dernières publications d'Orion que ce soit sous forme de posts ou par messages dans
                    les chats qui sont mis à votre disposition.<br/></p>
                <p>
                    Vous pouvez également consulter l'annuaire des entreprises partenaires pour trouver un contact ou encore
                    déposer une ou plusieurs idées dans la boite à idées<br/>
                    Enfin, si vous souhaitez retrouver vos collègues ou des membres d'autres entreprises présentes au sein des locaux d'Orion,<br/>
                    vous pouvez déclencher l'alerte apéro (via l'icône en bas à droite) pour les inviter.
                </p>
            </div>

        </>
    );
}
