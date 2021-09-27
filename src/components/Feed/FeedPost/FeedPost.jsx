import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(5)
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
    }
}))

const FeedPost = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}
                           component="img"
                           image="https://source.unsplash.com/random"
                           title="img"
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        My First Post
                    </Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti deserunt dolorem dolores laboriosam modi nobis, quod sed tempora veniam.
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size='small' color='primary'>Share</Button>
                    <Button size='small' color='primary'>Learn More</Button>
                </CardActions>
            </CardActionArea>
        </Card>

    )
};

export default FeedPost
