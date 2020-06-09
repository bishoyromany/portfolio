import React from 'react'

const Pagination = ({ offset, totalRecords, perpage, handleSettings, setOffset }) => {
    let pages = Math.ceil(totalRecords / perpage);
    let pagesRender = [];
    let currentPage = offset == 0 ? 1 : Math.ceil(offset / perpage) + 1;

    for (let x = 0; x < pages; x++) {
        pagesRender.push(<li key={x + 1}><a className={currentPage == x + 1 ? 'active' : ''} href="#" onClick={(e) => { e.preventDefault(); handlePagination(x + 1) }}>{x + 1}</a></li>)
    }

    const handlePagination = (page) => {
        if (page < 1 || page > pages) {
            return;
        }
        let offset = perpage * (page - 1);
        handleSettings({
            offset: perpage * (page - 1),
            perpage: perpage
        });
        setOffset(offset);
    }

    return (
        <>
            <nav className="pagination">
                <ul className="pagination-items">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handlePagination(currentPage - 1) }}>Previous</a></li>
                    {pagesRender}
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handlePagination(currentPage + 1) }}>Next</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination;