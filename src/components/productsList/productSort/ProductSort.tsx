import React, { useState } from "react";

import classes from "./ProductSort.module.css";
import SortOption from "../../../types/sortOption";
import ProductSortProps from "../../../types/productSortProps";

function ProductSort({ onSortChange }: ProductSortProps) {
  const [sortOrder, setSortOrder] = useState(SortOption.DEFAULT);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = event.target.value as SortOption;
    setSortOrder(newSortOrder);
    onSortChange(newSortOrder);
  };

  return (
    <section className={classes.productSort}>
      <label className={classes.productSort__label} htmlFor="sortOrder">
        Sort by:
      </label>
      <select
        className={classes.productSort__select}
        id="sortOrder"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value={SortOption.DEFAULT}>Default</option>
        <option value={SortOption.PRICE_ASC}>Price (Low to High)</option>
        <option value={SortOption.PRICE_DESC}>Price (High to Low)</option>
        <option value={SortOption.TITLE_ASC}>Title (A to Z)</option>
        <option value={SortOption.TITLE_DESC}>Title (Z to A)</option>
      </select>
    </section>
  );
}

export default ProductSort;
