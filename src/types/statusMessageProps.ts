interface StatusMessageProps {
  isLoading?: boolean;
  noId?: boolean;
  error?: { message: string } | undefined;
  noData?: boolean;
}

export default StatusMessageProps;
