const formatNumberShort = (num: number) => {
  let formattedNum;

  if (num >= 1000000) {
    const roundedNum = (num / 1000000).toFixed(1);
    formattedNum = roundedNum.endsWith(".0")
      ? roundedNum.slice(0, -2) + "M"
      : roundedNum + "K";
  } else if (num >= 1000) {
    const roundedNum = (num / 1000).toFixed(1);
    formattedNum = roundedNum.endsWith(".0")
      ? roundedNum.slice(0, -2) + "K"
      : roundedNum + "K";
  } else if (num !== 0) {
    formattedNum = num.toLocaleString("id-ID");
  } else {
    formattedNum = "0";
  }

  return formattedNum;
};

export default formatNumberShort;
