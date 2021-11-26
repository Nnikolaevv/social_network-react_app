import React, {ComponentType, FC, useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initial} from "./redux/Reducers/app-reduce";
import Preloader from "./components/common/Preloader/Preloader";
import {Container, Grid, makeStyles} from "@material-ui/core";
import MainComponentsWithSR from "./components/MainComponentsWithSR/MainComponentsWithSR";
import HeaderContainer from "./components/Header/HeaderContainer";
import RightBarContainer from "./components/RightBar/RightBarContainer";
import AddBar from "./components/AddBar/AddBar";
import LeftBar from "./components/LeftBar/LeftBar";
import BackdropWindow from "./components/common/BackDrop/BackDrop";
import RightBarComponentsWithSR from "./components/RightbarComponentWithSR/RightBarComponentWithSR";
import {AppStateType} from "./redux/reduxStore";


const useStyles = makeStyles(theme => ({
    rightBar: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    container: {
        padding: 0,
    }
}))

type PropsType = {
    isInit: boolean
    initial: () => void
}


const App: FC<PropsType> = ({isInit, initial}) => {
    const classes = useStyles()

    useEffect(() => {
        initial()
    })

    if (!isInit) return <BackdropWindow />

    return (
        <div>
            <HeaderContainer/>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item sm={2} xs={2}>
                        <LeftBar/>
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <MainComponentsWithSR/>
                    </Grid>
                    <Grid item sm={3} className={classes.rightBar}>
                        <RightBarComponentsWithSR/>
                    </Grid>
                    {/*<AddBar/>*/}
                </Grid>
            </Container>
        </div>

    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isInit: state.app.isInit
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {initial})
)(App)

