const useCompareValues = (key: string, order: "asc" | "desc") => {
  return (a: any, b: any) => {
    const valueA = key === "harga" ? a[key] : a[key].toLowerCase();
    const valueB = key === "harga" ? b[key] : b[key].toLowerCase();

    if (typeof valueA === "string" && typeof valueB === "string") {
      const dateA = new Date(valueA);
      const dateB = new Date(valueB);

      if (
        dateA instanceof Date &&
        !isNaN(dateA.getTime()) &&
        dateB instanceof Date &&
        !isNaN(dateB.getTime())
      ) {
        return order === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else {
        return order === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
    }

    return order === "asc" ? valueA - valueB : valueB - valueA;
  };
};

export default useCompareValues;
