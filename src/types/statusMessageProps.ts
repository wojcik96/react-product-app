interface StatusMessageProps {
  isLoading: boolean;
  noId?: boolean;
  error?: { message: string } | undefined;
  noData?: boolean;
  children: React.ReactNode;
}

export default StatusMessageProps;
