import React from "react";


const HeaderLoginInfo = (props) => {

    return (
        <div>
            <div>
                <span>{props.login}</span>
            </div>
            <div>
                <button onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}

export default HeaderLoginInfo;