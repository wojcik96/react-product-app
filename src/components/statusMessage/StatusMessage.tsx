import StatusMessageProps from "../../types/statusMessageProps";
import Spinner from "../spinner/Spinner";

function StatusMessage({
  isLoading,
  error,
  noId,
  noData,
}: StatusMessageProps) {
  if (isLoading) {
    return <Spinner />;
  } else if (noId) {
    return <p>Product ID is missing</p>;
  } else if (error) {
    return <p>{error.message}</p>;
  } else if (noData) {
    return <p>Product not found</p>;
  } 
}

export default StatusMessage;
