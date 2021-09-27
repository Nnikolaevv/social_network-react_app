import React from "react";
import {Box, Button, Typography} from "@material-ui/core";



const HeaderLoginInfo = (props) => {

    return (
        <React.Fragment>
            <Typography sx={{flexGrow: 1}}
                        variant={"h6"}>
                {props.login}
            </Typography>
            <Box>
                <Button color={"inherit"}
                        variant={"outlined"}
                        onClick={props.logout}>
                    Logout
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default HeaderLoginInfo;