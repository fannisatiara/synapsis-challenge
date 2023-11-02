"use client"
import React, { useState } from 'react';

interface PaginationProps<T> {
    data: T[];
    itemsPerPage: number;
    renderItem: any;
}

const Pagination = <T extends {}>({ data, itemsPerPage, renderItem }: PaginationProps<T>) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = Math.ceil(data.length / itemsPerPage);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderEllipsis = () => <span className="px-2">...</span>;

    const renderFirstPageButton = () => (
        <button onClick={() => handleClick(1)} className="px-4 py-2 rounded-md text-black hover:bg-yellow-500 hover:text-white">
            First
        </button>
    );

    const renderLastPageButton = () => (
        <button onClick={() => handleClick(totalPages)} className="px-4 py-2 rounded-md text-black hover:bg-yellow-500 hover:text-white">
            Last
        </button>
    );

    const renderPaginationButtons = () => {
        const buttons: JSX.Element[] = [];

        // Render first page button
        buttons.push(renderFirstPageButton());

        // Render ellipsis if needed
        if (currentPage > 5) {
            buttons.push(renderEllipsis());
        }

        // Render previous page
        if (currentPage > 1) {
            buttons.push(
                <button onClick={() => handleClick(currentPage - 1)} className="px-4 py-2 rounded-md text-black hover:bg-yellow-500 hover:text-white">
                    Prev
                </button>
            );
        }

        // Render current and adjacent pages
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i > 0 && i <= totalPages) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`${
                            currentPage === i ? 'bg-yellow-500 text-white' : 'hover:bg-yellow-500 text-black hover:text-white'
                        } px-4 py-2 rounded-md `}
                    >
                        {i}
                    </button>
                );
            }
        }

        // Render ellipsis if needed
        if (currentPage < totalPages - 2) {
            buttons.push(renderEllipsis());
        }

        // Render next page
        if (currentPage < totalPages) {
            buttons.push(
                <button onClick={() => handleClick(currentPage + 1)} className="px-4 py-2 rounded-md text-black hover:bg-yellow-500 hover:text-white">
                    Next
                </button>
            );
        }

        // Render last page button
        buttons.push(renderLastPageButton());

        return buttons;
    };
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const displayedData: T[] = data?.slice(startIndex, startIndex + itemsPerPage);


    return (
        <div className="flex flex-col gap-5">
            <div className="grid gap-7">{displayedData.map((item, index) => renderItem(item, index))}</div>
            <div className="flex flex-wrap justify-center space-x-2 mb-4">{renderPaginationButtons()}</div>
        </div>
    );
};

export default Pagination;
