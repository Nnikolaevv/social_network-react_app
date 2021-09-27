import Search from "@material-ui/icons/Search";
import {InputBase} from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";
import React from "react";

const HeaderSearch = (props) => {
    const classes = props.classes

    const onSetOpenClick = () => {
        props.onSetOpenClick(false)
    }

    return (
        <div className={classes.search}>
            <Search className={classes.searchIcons}/>
            <InputBase className={classes.input}
                       placeholder="Search…"/>
            <Cancel className={classes.cancel} onClick={onSetOpenClick}/>
        </div>
        )
}

export default HeaderSearch


