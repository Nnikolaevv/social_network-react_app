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

const Postt = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}
                           component="img"
                           image="https://images.unsplash.com/photo-1632671899548-a671fab3633f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                           title="Contemplative Reptile"
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

export default Postt
