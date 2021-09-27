import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {connect} from "react-redux";
import {compose} from "redux";
import {initial} from "./redux/Reducers/app-reduce";
import Preloader from "./components/common/Preloader/Preloader";
import {Grid, makeStyles} from "@material-ui/core";
import MainComponentsWithSR from "./components/MainComponentsWithSR/MainComponentsWithSR";
import HeaderContainer from "./components/Header/HeaderContainer";
import RightBarContainer from "./components/RightBar/RightBarContainer";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        minWidth: 400
    },
        container: {
            paddingTop: theme.spacing(10),
            borderRight: '1px solid #ece7e7'
        },
        right: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    }
}))

const App = (props) => {
    const classes = useStyles()

    useEffect(() => {
        props.initial()
    })


    // componentDidMount() {
    //     this.props.initial()
    // }
    //



        useEffect(() => {
            if (!props.isInit) return <Preloader/>
        })


        return (
            <div className={classes.mainContainer} >
                <HeaderContainer/>
                <Grid container>
                        <Grid item sm={2} xs={2} >
                            <Navbar/>
                        </Grid>
                        <Grid item sm={7} xs={10} className={classes.container}>
                            <MainComponentsWithSR />
                        </Grid>
                        <Grid item sm={3} className={classes.right}>
                            <RightBarContainer/>
                        </Grid>
                </Grid>
                {/*<Addd />*/}
            </div>

        );
    }

const mapStateToProps = (state) => {
    return {
        isInit: state.app.isInit
    }
}

export default compose(
    connect(mapStateToProps, {initial})
)(App)

