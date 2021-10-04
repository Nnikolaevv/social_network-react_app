import React from "react";
import {compose} from "redux";
import Gallery from "./Gallery";

const GalleryContainer = (props) => {

    return (
        <div>
            <Gallery {...props}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        galleryImg: state.galleryPage.galleryImg
    }
}


export default compose(mapStateToProps)(GalleryContainer)

