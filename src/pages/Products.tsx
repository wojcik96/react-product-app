import useFetch from "../hooks/useFetch";
import ProductList from "../components/productsList/ProductList";
import ProductSort from "../components/productsList/productSort/ProductSort";
import useSort from "../hooks/useSort";
import { fetchProducts } from "../api/productsApi";
import SectionWrapper from "../components/sectionWrapper/SectionWrapper";
import StatusMessage from "../components/statusMessage/StatusMessage";

function ProductsPage() {
  const {
    fetchedData: fetchedProduct,
    isFetching,
    error,
  } = useFetch(fetchProducts);
  const { sortedData: sortedProducts, handleSortChange } =
    useSort(fetchedProduct);

  return (
    <SectionWrapper title="Products Page">
      <>
        <ProductSort onSortChange={handleSortChange} />
        {isFetching || error ? (
          <StatusMessage
            isLoading={isFetching}
            error={error}
            noData={!fetchedProduct}
          />
        ) : (
          <ProductList productsList={sortedProducts} />
        )}
      </>
    </SectionWrapper>
  );
}

export default ProductsPage;
