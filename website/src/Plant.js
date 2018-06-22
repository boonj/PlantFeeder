import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Timer from './Utils/timer';

export default class Plant extends Component {

  timer() {
    // https://stackoverflow.com/questions/40885923/countdown-timer-in-react
    return <Timer TimeLeft={this.props.TimeLeft}/>;
  }

  render() {
    return (
      <div>
        <img src="D:\Projecten\PlantFeeder\website\src\aardbeien.jpg"/>
        <img src="./aardbeien.jpg"/>
        <Card className="card" style={{maxWidth: 345}}>
          <CardMedia
            style={{height: 0, paddingTop: '56.25%'}}
            className="media"
            image="./aardbeien.jpg"
            title="no image available"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Aardbeien plantje
            </Typography>
            <Typography component="p">
              Heeft veel zon nodig maar ook regelmatig 
              wat water voor mooie aardbeien
            </Typography>
          </CardContent>
          <CardActions>
            {this.timer()}
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>  
        </Card>
      </div>
    ) 
  }
}
