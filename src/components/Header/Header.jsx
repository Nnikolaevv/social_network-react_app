import React from "react";
import HeaderLoginInfo from "./HeaderLoginInfo";
import HeaderLogoutInfo from "./HeaderLogoutInfo";
import {AppBar, Button, Container, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import Menu from '@material-ui/icons/Menu'


const useStyles = makeStyles(theme => ({

}))

const Header = (props) => {
    const style= useStyles()
    return (
            <AppBar position={"fixed"}>
                <Container>
                    <Toolbar>
                            <Button variant={"contained"}
                                    size={"large"}
                                    className={style.button}>Button</Button>
                            <IconButton sx={{mr: "10px"}}
                                    edge={"start"}
                                    color={'inherit'}
                                    aria-label={'menu'}>
                            <Menu/>
                        </IconButton>
                        {props.isAuth
                            ? <HeaderLoginInfo {...props}/>
                            : <HeaderLogoutInfo/>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
    );
};

export default Header
