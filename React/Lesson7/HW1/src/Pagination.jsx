import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {

    const isPrevPageAvailable = currentPage > 0;
    const isNextPageAvailable = totalItems - itemsPerPage * (currentPage + 1) > 0;

    return (
        <div className='pagination'>
            <button className='btn'
                disabled={!isPrevPageAvailable}
                onClick={goPrev}>
                {isPrevPageAvailable && '←'}
            </button>
            <span className='pagination__page'>{currentPage + 1 }</span>
            <button className='btn'
                disabled={!isNextPageAvailable}
                onClick={goNext}>
                {isNextPageAvailable && '→'}
            </button>
        </div>
    )
}

export default Pagination;