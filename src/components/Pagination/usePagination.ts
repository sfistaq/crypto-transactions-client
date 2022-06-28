import { useState } from "react";

const usePagination = <T>(items: Array<T>, perPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(perPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginationCount = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    paginationCount,
    handleChangePage,
    setItemsPerPage,
    paginatedItems,
  };
};

export default usePagination;
