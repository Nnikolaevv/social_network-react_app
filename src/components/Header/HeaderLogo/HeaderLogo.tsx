import {Typography} from "@material-ui/core";
import React, {FC} from "react";
import {ClassNameMap} from "@mui/material";

type PropsType = {
    classes: ClassNameMap
}
const HeaderLogo: FC<PropsType> = ({classes}) => {

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
