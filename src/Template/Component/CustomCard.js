import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CustomCard(item) {
    item = item.item;
  return (
    <Card className={'card'}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
