import React from "react";
import RightBarAfterLogin from "./RightBarAfterLogin/RightBarAfterLogin";
import RightBarBeforeLogin from "./RightBarBeforeLogin/RightBarBeforeLogin";


const RightBar = (props) => {

    return (
        <React.Fragment>
            {props.isAuth
                ? <RightBarAfterLogin {...props}/>
                : <RightBarBeforeLogin />
            }
        </React.Fragment>
    )

}

export default RightBar