import React from "react";
import {useHistory} from "react-router-dom";
import avatar from '../../../assets/img/ava.jpg'
import {Avatar, Box, Button, Card, CardContent, Typography} from "@material-ui/core";

const UserCard = (props) => {
    const classes = props.classes
    const user = props.user

    let history = useHistory()

    const toProfile = (user) => {
        history.push(`/profile/${user.id}`)
    }

    return (
        <div>
            <Card className={classes.userCardContainer}>
                <CardContent className={classes.userCard}>
                    <Box className={classes.userCardBox}>
                        <Avatar src={user.photos.small != null ? user.photos.small : avatar}
                                className={classes.userAvatar}
                                onClick={() => toProfile(user)}/>
                        <Typography className={classes.userTitle}
                                    color="textPrimary"
                                    gutterBottom>
                            {user.name}
                        </Typography>
                    </Box>
                    <Box className={classes.userFollowButton}>
                        {props.isAuth ?
                            <div>
                                {user.followed
                                    ? <Button variant="outlined"
                                              color="secondary"
                                              size="small"
                                              disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  props.unfollow(user.id)
                                              }}>
                                        Unfollow
                                        </Button>
                                    : <Button variant="contained"
                                              color="primary"
                                              size="small"
                                              disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  props.follow(user.id)
                                              }}>
                                        Follow
                                    < /Button>}
                            </div>
                            : null}
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}


export default UserCard;