import Apero from '../Component/apero';
import Title from "../Component/Title";
import Stickman from "../../Assets/perso_orion.svg";
import CardArticle from '../Component/CardArticle'
import React from "react";

export function HomeScreen() {
    return (
        <>
            <Apero/>
            <div className={"homeBox"}>
                <img
                    className={'stickOrion'}
                    src={Stickman}
                    alt="Icone orion"/>
                <h2>Bienvenue sur Sirius</h2>
                <div className="bodyHome">
                    <div className="boxText">
                        <p><span>Sirius</span> est une plateforme qui a pour objectif d'être votre happiness officer en
                            ligne.<br/>
                            Ici, vous pouvez accéder aux dernières publications d'Orion que ce soit sous forme de posts
                            ou
                            par
                            messages dans
                            les chats qui sont mis à votre disposition.</p>
                        <p>
                            Vous pouvez également consulter l'annuaire des entreprises partenaires pour trouver un
                            contact
                            ou encore déposer une ou plusieurs idées dans la boite à idées
                            Enfin, si vous souhaitez retrouver vos collègues ou des membres d'autres entreprises
                            présentes
                            au sein des locaux d'Orion, vous pouvez déclencher l'alerte apéro (via l'icône en bas à
                            droite) pour les inviter.
                        </p>
                    </div>
                    <div className="boxImg">
                        <img src="https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_960_720.jpg"
                             alt="Orange"/>
                    </div>

                </div>

                <h2>Actualités</h2>
                <div className={"cardArticle"}>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                </div>

            </div>

        </>
    );
}
