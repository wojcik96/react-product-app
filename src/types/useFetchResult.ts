interface FetchResult<T> {
  isFetching: boolean;
  fetchedData?: T;
  error?: { message: string };
}

export default FetchResult;