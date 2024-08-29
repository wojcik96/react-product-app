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
    <StatusMessage
      isLoading={isFetching}
      error={error}
      noData={!fetchedProduct}
    >
      <SectionWrapper title="Products Page">
        <>
          <ProductSort onSortChange={handleSortChange} />
          <ProductList productsList={sortedProducts} />
        </>
      </SectionWrapper>
    </StatusMessage>
  );
}

export default ProductsPage;
