import Apero from '../Component/apero';
import Stickman from "../../Assets/perso_orion.svg";
import CardArticle from '../Component/CardArticle'
import React, {useEffect, useState} from "react";
import {getAllPost} from "../../Service/PostService";

export function HomeScreen() {

    let [postList, setPostList] = useState([]);

    useEffect(async () => {
        try {
            let allPost = await getAllPost();
            allPost = allPost.concat(allPost).concat(allPost);
            let lastThreePost = allPost.slice(0, 3)
            setPostList(lastThreePost);
            console.log(lastThreePost);
        } catch (e) {
            console.error(e);
        }
    }, []);

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
                        <p>Bienvenue chez Orion 1.7, je suis <span>Sirius</span> votre happiness officer !
                            Ici, vous pouvez accéder aux dernières publications d'Orion.
                        </p>

                        <p>
                            Pour contacter directement un membre de la galaxie, utilisez le tchat et la recherche,
                            Enfin pour créer un évènement le bouton Alerte Apéro est situé sur chaque Page.
                        </p>
                        <p>
                            Bon voyage dans la galaxie d'Orion !
                        </p>
                    </div>
                    <div className="boxImg">
                        <img src="https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_960_720.jpg"
                             alt="Orange"/>
                    </div>

                </div>

                <h2>Actualités</h2>
                <div className={"cardArticle"}>
                    {postList.map((item, index) => (
                        <CardArticle item={item} />
                    ))}
                </div>

            </div>

        </>
    );
}
