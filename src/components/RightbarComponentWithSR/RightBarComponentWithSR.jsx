import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import RightBarContainer from "../RightBar/RightBarContainer";
import GalleryContainer from "../Gallery/GalleryContainer";


const RightBarComponentsWithSR = (props) => {

    return (
        <div className='container'>
            <RightBarContainer/>
        </div>
    )

}

export default RightBarComponentsWithSR