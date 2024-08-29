import { useEffect, useState } from "react";

function useLastViewedProduct() {
  const [lastViewedProduct, setLastViewedProduct] = useState<string>("");

  useEffect(() => {
    const savedId = localStorage.getItem("lastViewedProdId");
    
    savedId && setLastViewedProduct(savedId);
  }, []);

  useEffect(() => {
    localStorage.setItem("lastViewedProdId", lastViewedProduct);
  }, [lastViewedProduct]);

  return { lastViewedProduct, setLastViewedProduct };
}

export default useLastViewedProduct;
