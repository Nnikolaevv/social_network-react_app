import React, {useState} from "react";
import './Paginator.module.css'
import classNames from "classnames";

const Paginator = ({totalItemsCount, pageSize, currentPage, setPage, portionSize = 10}) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={'paginator'}>
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1)}}> Prev</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return (
                    <span onClick={() => setPage(p)}
                          className={classNames({['selectedPage'] : currentPage === p}, 'pageNumber')}
                          key={p}>
                        {p}</span>
                )
            })}

            { portionCount > portionNumber   &&
            <button onClick={() => { setPortionNumber(portionNumber + 1)}}> Next</button>}
        </div>
    )
}

export default Paginator;
