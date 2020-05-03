import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../theme.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: theme.spacing(3),
    height: '40vw',
    marginLeft: theme.spacing(5)

  },
  media: {
    height: 200,
  },
  description: {

  },
});

export default function Coursecard({title, image, description}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={image}
          title={title}
          
        />
        <CardContent>
          <Typography className={classes.title}  gutterBottom variant="h5" component="h2">
            {title ? title: "Unknown"}
            </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
           {description ? description: "Unknown"}
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
