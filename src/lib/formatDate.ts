const formatDate = (date: string, options?: any) => {
  const optionsDefault: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString(
    "id-ID",
    options ? options : optionsDefault
  );
  return formattedDate;
};

export default formatDate;
