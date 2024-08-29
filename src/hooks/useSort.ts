import { useState, useEffect } from "react";

import Product from "../types/product";
import SortOption from "../types/sortOption";

function useSort(fetchedData?: Product[]) {
  const [sortedData, setSortedData] = useState(fetchedData);

  useEffect(() => {
    setSortedData(fetchedData);
  }, [fetchedData]);

  const handleSortChange = (sortOrder: SortOption) => {
    if (!fetchedData) return;

    let sortedData = [...fetchedData];
    sortedData.sort(getSortedFun(sortOrder));
    setSortedData(sortedData);
  };

  function getSortedFun(option: SortOption): (a: Product, b: Product) => number {
    switch (option) {
      case SortOption.PRICE_ASC:
        return (a, b) => parseFloat(a.price) - parseFloat(b.price);
      case SortOption.PRICE_DESC:
        return (a, b) => parseFloat(b.price) - parseFloat(a.price);
      case SortOption.TITLE_ASC:
        return (a, b) => a.title.localeCompare(b.title);
      case SortOption.TITLE_DESC:
        return (a, b) => b.title.localeCompare(a.title);
      default:
        return () => 0;
    }
  }

  return { sortedData, handleSortChange };
}

export default useSort;
