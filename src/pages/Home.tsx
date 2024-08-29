import { Link } from "react-router-dom";

import SectionWrapper from "../components/sectionWrapper/SectionWrapper";
import useLastViewedProduct from "../hooks/useLastViewedProduct";

function HomePage() {
  const { lastViewedProduct } = useLastViewedProduct();
  
  return (
    <SectionWrapper title="Home Page">
      {!!lastViewedProduct && (
        <Link to={`/products/${lastViewedProduct}`}>
          Wróć do przeglądania produktu
        </Link>
      )}
    </SectionWrapper>
  );
}

export default HomePage;
