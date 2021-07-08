import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        float: "left",
        maxWidth: 354,
        minWidth: 150,
        margin: '3%',
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <div className="cardArticle">
            <div className="card">
                <a href="#">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg"
                             alt="Orange"/>
                    </div>

                    <div className="card-body">

                        <div className="card-date">
                            <time>20 Novembre 1992</time>
                        </div>

                        <div className="card-title">
                            <h3>Lorem Ipsum</h3>
                        </div>

                        <div className="card-excerpt">
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem
                                consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia
                                veniam consectetur unde autem inventore.</p>
                        </div>

                    </div>
                </a>
            </div>
        </div>

    );
}
