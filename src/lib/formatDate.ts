const formatDate = (date: string, lang?: string | null, options?: any) => {
  const optionsDefault: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString(
    lang || "id-ID",
    options || optionsDefault
  );
  return formattedDate;
};

export default formatDate;
