const useFormatNumber = (num: number) => {
  let formattedNum;
  // console.log(num)
  if (num !== 0) {
    formattedNum = num?.toLocaleString("id-ID");
  } else if (num === 0) {
    formattedNum = "0";
  } else {
    formattedNum = "";
  }

  return formattedNum;
};

export default useFormatNumber;
