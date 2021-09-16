import React from "react";
import './Paginator.module.css'

const Paginator = (props) => {
    const pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return (
                    <span onClick={() => props.setPage(p)}
                          className={props.currentPage === p && 'selectedPage'}>
                        {p}
                    </span>
                )
            })}
        </div>
    )
}

export default Paginator;