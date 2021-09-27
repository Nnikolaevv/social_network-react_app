import {Typography} from "@material-ui/core";
import React from "react";


const HeaderLogo = (props) => {
    const classes = props.classes
    return (
        <React.Fragment>
            <Typography variant='h6' className={classes.logoLg}>
                Social network
            </Typography>
            <Typography variant='h6' className={classes.logoSm}>
                SN
            </Typography>
        </React.Fragment>

    )
}

export  default HeaderLogo;
