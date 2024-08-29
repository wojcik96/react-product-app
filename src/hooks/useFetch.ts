import { useEffect, useState } from "react";

import FetchFun from "../types/fetchFun";
import FetchResult from "../types/useFetchResult";

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

export default useFetch;
