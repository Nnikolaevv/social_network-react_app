import React, {useState} from "react";
import {Pagination} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Paginator = ({totalItemsCount, pageSize, setPage}) => {
    const classes = useStyles()

    const pageCount = Math.ceil(totalItemsCount / pageSize);

    const [currentPage, setCurrentPage] = useState(1);
    const handleChange = (event, value) => {
        setCurrentPage(value)
        setPage(value);
    };

    return (
        <div className={classes.container}>
            <Pagination count={pageCount}
                        variant="outlined"
                        shape="rounded"
                        page={currentPage}
                        onChange={handleChange}/>
        </div>


    )
}

export default Paginator;
