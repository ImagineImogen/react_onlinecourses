import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppbarMui from './components/AppbarMui'
import {Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie'

const data = 
  {
    "id": 1,
    "title": "Potion-Making - Beginner's course",
    "description": "This highly-rated online course will guide you step-by-step through the composition of your first potion and other related aspects of potion-making",
    "lessons": [
        {
            "id": 1,
            "title": "Induction - What is a potion making?",
            "description": "What is a potion making and what will you need during our course?",
            "course": "Potion-Making - Beginner's course"
        }
    ],
    "teacher": [
        {
            "teacher_name": "alin"
        }
    ]
}

const teacherMapped = data.teacher.map(tea => (tea.teacher_name))

//const lessonsMapped = data.lessons.map(less => (less.description))

class CourseView extends Component { 

    state = {
        oneCourse: [],
        teacher: []
        
    };

    componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}${window.location.pathname}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ oneCourse: data, teacher: data.teacher })
        console.log(data, data.teacher.map(tea => (tea.teacher_name))[0])
        })
        .catch(error => console.log)

const teacherss = this.state.teacher.map(tea => (tea.teacher_name))[0]

}



enroll = event => {
    let cookieValue = (document.cookie.match(/^(?:.*;)?\s*apitoken\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    if (cookieValue.length > 0) {
            fetch(`${process.env.REACT_APP_API_URL}${window.location.pathname}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 
                            'Authorization': `Token ${cookieValue}`},
                body: JSON.stringify(this.props.cookie)
                }).then( resp => resp.json())
                .then( res => {
                    alert (res)
                })
                .catch( error => console.log(error))}
    else {
        alert ('An Error occurred!')
    }}

  teachersMapped =()=> {if (this.state.oneCourse.teacher){ this.state.oneCourse.teacher.map(tea => (tea.teacher_name))}};

  lessonMapped = () => {if (this.state.oneCourse.lessons){ this.state.oneCourse.lessons.map(less => (less.description))}};
  //teachersMapped =()=> { this.state.teacher && this.state.teacher.map(tea => (tea.teacher_name))};

  render () {
    return(
        <div>
          <AppbarMui />
                <Card>
                
                    <CardMedia style={{height: 300}}
                    component="img"
                        image="../img/room.jpg"
                        />
                    <CardContent>
                    
                        <Typography gutterBottom variant="headline" component="h2" color="secondary">
                            {this.state.oneCourse.title}
                        </Typography>
                        <Typography component="p">
                            {this.state.oneCourse.description}
                        </Typography>
                        <h4>Teacher</h4>
                        <Typography>
                        Teacher is {this.teacherss || "To be determined"}
                        </Typography>
                        <h4>Lessons</h4>
                         <Typography>
                        {this.lessonMapped || "To be continued"}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary" target="_blank" onClick={this.enroll}>
                            Enroll on Course
                        </Button> 
                        
                    </CardActions>
                </Card>
         
        </div>
   ) 
}


}
export default withCookies (CourseView)



