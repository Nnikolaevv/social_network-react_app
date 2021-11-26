import React, {FC} from "react";
import RightBarAfterLogin from "./RightBarAfterLogin/RightBarAfterLogin";
import RightBarBeforeLogin from "./RightBarBeforeLogin/RightBarBeforeLogin";
import {makeStyles} from "@material-ui/core";
import {ClassNameMap} from "@mui/material";

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        paddingTop: theme.spacing(9),
        position: 'sticky',
        top: 0,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderLeft: '1px solid #ece7e7',
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#555',
    },
    link: {
        marginRight: theme.spacing(2),
        color: '#555',
        fontSize: 16,
    }
}))

type PropsType = {
    isAuth: boolean
}

const RightBar: FC<PropsType> = ({isAuth}) => {
    const classes: ClassNameMap = useStyles()

    return (
        <div className={classes.container}>
            {isAuth
                ? <RightBarAfterLogin
                    classes={classes}
                />
                : <RightBarBeforeLogin
                    classes={classes}
                />
            }
        </div>
    )
}

export default RightBar