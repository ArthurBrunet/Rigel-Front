import React from 'react';

export default function ImgMediaCard(item) {
    item = item.item;

    return (
        <div className="cardArticle">
            <div className="card">
                    <div className="card-image">
                        <img src={item.mediaUrl}
                             alt="Orange"/>
                    </div>

                    <div className="card-body">

                        <div className="card-date">
                            <time>{item.datePost}</time>
                        </div>

                        <div className="card-title">
                            <h3>{item.title}</h3>
                        </div>

                        <div className="card-excerpt">
                            <p>{item.content}</p>
                        </div>

                    </div>
            </div>
        </div>

    );
}
