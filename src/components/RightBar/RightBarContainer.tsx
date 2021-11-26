import React, {FC} from "react";
import {connect} from "react-redux";
import RightBar from "./RightBar";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    isAuth: boolean
}

const RightBarContainer: FC<PropsType> = ({isAuth}) => {
        return (
            <RightBar isAuth={isAuth}
            />
        )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps)(RightBarContainer)