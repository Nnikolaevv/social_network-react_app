import React, {FC} from 'react'
import Paginator from "../common/Paginator/Paginator";
import UserCard from "./UserCard/UserCard";
import {makeStyles, Typography} from "@material-ui/core";
import {UserType} from "../../types/types";
import {follow} from "../../redux/Reducers/users-reducer";

const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(3)
    },
    userCardContainer: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.primary.grey ,
    },
    userHeader: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(1),
        fontSize: 20,
        fontWeight: 500,
        color: '#555',
    },
    userCardBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        left: theme.spacing(2),
    },
    userCard: {
        display: "flex",
        justifyContent: "space-between",
    },
    userAvatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: theme.spacing(2)
    },
    userTitle: {},
    userFollowButton: {
        display: "flex",
        alignItems: "center"
    }
}))

type PropsTypes = {
    users: Array<UserType>
    title: string
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setPage: (numberPage: number) => void
}

const Users: FC<PropsTypes> = ({
                                   users,
                                   title,
                                   pageSize,
                                   totalUserCount,
                                   currentPage,
                                   isFetching,
                                   followingInProgress,
                                   isAuth,
                                   follow,
                                   unfollow,
                                   setPage
                               }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography className={classes.userHeader}
                        component='span'
                        variant='body1'
                        gutterBottom>
                <p>{title}</p>
            </Typography>
            {users.map(u => (
                    <UserCard key={u.id}
                              user={u}
                              isAuth={isAuth}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unfollow={unfollow}
                              classes={classes}/>
                )
            )
            }
            <Paginator currentPage={currentPage}
                       totalItemsCount={totalUserCount}
                       pageSize={pageSize}
                       setPage={setPage}/>
        </div>
    )
}


export default Users;



