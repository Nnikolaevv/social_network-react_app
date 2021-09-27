import React from "react";
import {useHistory} from "react-router-dom";
import {Box, Button} from "@material-ui/core";


const HeaderLogoutScreen = (props) => {
    let history = useHistory();

    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
            <Box>
                <Button color={"secondary"}
                        variant="contained"
                        onClick={redirectToLogin}>
                    Log In
                </Button>
            </Box>
    )
}

export default HeaderLogoutScreen;