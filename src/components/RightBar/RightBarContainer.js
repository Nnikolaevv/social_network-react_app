import React from "react";
import {connect} from "react-redux";
import RightBar from "./RightBar";


const RightBarContainer = (props) => {
        return (
            <RightBar {...props}/>
        )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps)(RightBarContainer)