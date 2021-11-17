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

type PropsType = {
    totalItemsCount: number
    pageSize: number
    setPage: (value: number) => void
    currentPage: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, setPage, currentPage}) => {
    const classes = useStyles()

    const pageCount = Math.ceil(totalItemsCount / pageSize);

    const [page, setThisPage] = useState(currentPage);
    const handleChange = (event: any, value: number) => {
        setThisPage(value)
        setPage(value);
    };

    return (
        <div className={classes.container}>
            <Pagination count={pageCount}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handleChange}/>
        </div>
    )
}

export default Paginator;
