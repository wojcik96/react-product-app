

# Product App

## Overview

The **Product App** is a simple React application designed to show skills in building a frontend application using React and TypeScript. The primary functionality of the application is to integrate with an external API to fetch and display product data.

## Features

- **Product Listing**: View a list of products fetched from an external API.
- **Product Details**: Click on a product to view detailed information about it.
- **Sorting**: Sort the list of products based on different criteria (e.g., price, title).
- **Last Viewed Product**: Automatically tracks and provides a link to the last viewed product.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **CSS**: Used for styling the application.
- **Vite**: A build tool that provides a fast development environment.

## Key Functionalities and Code Insights

### **Managing Last Viewed Product**
This code defines a custom React hook called `useLastViewedProduct`. It handles storing and retrieving the ID of the last viewed product from the browser's local storage
```typescript 
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

```

**Rationale**
I chose this approach because using React Context might be overkill for this problem. The React documentation suggests considering other solutions before using Context. In this case, localStorage is a simple and effective choice for storing the last viewed product. This solution is straightforward and does not require setting up a Context provider.

Additionally, I added functionality to remember the last viewed product, so this information is preserved even if you navigate away from the page. This way, the user can return to the same product without losing their place. By using localStorage, the state is maintained across page reloads, making it a practical choice for this use case.

### Handling Data Fetching with a Custom Hook

The following code demonstrates how to handle data fetching with a custom React hook named `useFetch`:

```typescript
function useFetch<T>(fetchFun: FetchFun<T>): FetchResult<T> {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState<T | undefined>();
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFun();
        setFetchedData(data);
      } catch (e) {
        setError(e as Error);
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  return { isFetching, fetchedData, error };
}

```
**Rationale**
I used this approach because it centralizes the handling of common states such as `isFetching` and `error` in one place. This keeps the code clean and manageable. The `useFetch` hook simplifies data fetching by handling loading and error states automatically. By doing so, it reduces the need for repetitive code across different components.

Additionally, this hook makes it easy to reuse the fetching logic in various parts of the application, making the codebase more modular and maintainable.

### Fetching Data from the API

The following code demonstrates how data is fetched from an API using a generic `fetchFromApi` function:

```typescript
async function fetchFromApi<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchProducts(): Promise<Product[]> {
  return fetchFromApi<Product[]>(`/products`);
}

export async function fetchProductDetails(id: string): Promise<Product> {
  return fetchFromApi<Product>(`/products/${id}`);
}
```
**Rationale**
I chose this method because it makes the code easier to manage and expand. The `fetchFromApi` function can be reused for different API requests, reducing repeated code and simplifying error handling. This design allows easy updates to API endpoints or base URLs by changing just one function

### Data Sorting
The following code demonstrates how data sorting is handled using a custom React hook `useSort`
```typescript 
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
```

**Rationale**
The chosen solution allows sorting functionality to be reused in other components. This implementation makes it easy to scale in the future. I didn't move the `getSortedFun` function to a utility file because it is currently used only in one place in the code.





## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

	``` git clone [https://github.com/yourusername/product-app.git](https://github.com/wojcik96/react-product-app)```

2. **Navigate to the project directory**:

	```cd product-app```

3. **Install dependencies**:
 
	```npm install```

4. **Start the development server**:

	```npm run dev```


