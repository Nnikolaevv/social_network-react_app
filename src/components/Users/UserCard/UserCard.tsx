import React, {FC, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Avatar, Box, Button, Card, CardContent, Typography} from "@material-ui/core";
import {UserType} from "../../../types/types";

type PropsType = {
    user: UserType
    classes: any
    isAuth: boolean
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const UserCard: FC<PropsType> = ({user, classes, isAuth, followingInProgress, follow, unfollow}) => {
    const [number, setNumber] = useState(1)

    useEffect(() => {
        setNumber(Math.floor(Math.random() * 7) + 1)
    }, [])


    let history = useHistory()

    const toProfile = (user: UserType) => {
        history.push(`/profile/${user.id}`)
    }

    return (
        <div>
            <Card className={classes.userCardContainer}>
                <CardContent className={classes.userCard}>
                    <Box className={classes.userCardBox}>
                        <Avatar src={user.photos.large ||
                            `https://v4.mui.com/static/images/avatar/${number}.jpg`}
                                className={classes.userAvatar}
                                onClick={() => toProfile(user)}/>
                        <Typography className={classes.userTitle}
                                    color="textPrimary"
                                    gutterBottom>
                            {user.name}
                        </Typography>
                    </Box>
                    {isAuth &&
                        <Box className={classes.userFollowButton}>
                            {user.followed ?
                                    <Button variant="outlined"
                                            color="secondary"
                                            size="small"
                                            disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                unfollow(user.id)
                                            }}>
                                        Unfollow
                                    </Button>
                                    : <Button variant="contained"
                                              color="primary"
                                              size="small"
                                              disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}>
                                    Follow
                                    </Button>
                            }
                        </Box>
                    }
                </CardContent>
            </Card>
        </div>
    )
}


export default UserCard;