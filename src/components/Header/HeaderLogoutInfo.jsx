import React from "react";
import {useHistory} from "react-router-dom";
import {Box, Button, Typography} from "@material-ui/core";



const HeaderLogoutInfo = (props) => {
    let history = useHistory();

    const redirect = () => {
        history.push('/login')
    }

    return (
        <React.Fragment>
            <Typography sx={{flexGrow: 1}}
                        variant={"h6"}>
                Social Network
            </Typography>
            <Box>
                <Button color={"inherit"}
                        variant={"outlined"}
                        onClick={redirect}>Log In
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default HeaderLogoutInfo;