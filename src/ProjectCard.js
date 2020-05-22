import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Card, CardActionArea,CardContent,CardActions, CardMedia} from '@material-ui/core';
const useStyles = makeStyles(() => ({
    root: {
        // maxWidth: 345,
    },
    media: {
        height : 200    
    },
}))  
function ProjectCard(props) {
    const classes = useStyles();
    const { projectArray } = props;
    return (
        <div flexGrow = {1}>
        <Grid container justify="center" spacing={3} alignItems = "center" style={{ minHeight: '100vh' }}>
        {projectArray.map((project) => (
            <Grid item xs={12} sm = {6}md = {3}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={project.image}
                    title= {project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                {project.linkArray.map((links) => (
                <Button size="small" color="primary" href = {links.linkRef}>
                    {links.linkName}
                </Button>
                ))}
                </CardActions>
                </Card>
            </Grid>
        ))}
      </Grid>
      </div>
      );
}
export default ProjectCard;
