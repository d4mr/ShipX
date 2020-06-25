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
  media: {
    height: 140,
  },
});

export default function Ship({ ship }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ship.image}
          title={ship.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ship.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Weight (kgs): {ship.weight_kg}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type: {ship.type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {ship.active?"Active":"Inactive"}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={ship.url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}