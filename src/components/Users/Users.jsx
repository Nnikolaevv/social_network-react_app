import React from "react";
import Paginator from "../common/Paginator/Paginator";
import UserCard from "./UserCard/UserCard";
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(3)
    },
    userCardContainer: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.primary.grey,
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

const Users = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography className={classes.userHeader}
                        gutterBottom>
                USERS LIST
            </Typography>
            {props.users.map(u => (
                <UserCard key={u.id}
                          user={u}
                          isAuth={props.isAuth}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow}
                          unfollow={props.unfollow}
                          classes={classes}/>
            )
            )}

            <Paginator currentPage={props.currentPage}
                       totalItemsCount={props.totalUserCount}
                       pageSize={props.pageSize}
                       setPage={props.setPage}/>
        </div>
    )
}


export default Users;