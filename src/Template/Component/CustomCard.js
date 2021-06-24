import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CustomCard() {

  return (
    <Card className={'card'}>
      <CardActionArea>
        <CardContent>
            <Avatar aria-label="recipe">
                R
            </Avatar>
            <Typography gutterBottom variant="h5" component="h2">
                lorem ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Détails
        </Button>
      </CardActions>
    </Card>
  );
}
