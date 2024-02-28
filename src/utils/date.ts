export const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};