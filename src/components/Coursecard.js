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
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image="./img/potions.jpg"
          title="Potions"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Potion-Making - Beginner's Course
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This highly-rated online course will guide you step-by-step through the composition of your first potion and other related aspects of potion-making.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" color="primary">
          Click here to find out more
        </Button>
      </CardActions>
    </Card>
  );
}
