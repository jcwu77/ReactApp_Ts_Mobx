// 数字转换 例10000 => 10,000
export const addComma = (num: string | number): string => {
  let input = 0;
  switch (typeof num) {
    case "string":
      input = parseInt(num, 10);
      break;
    case "number":
      input = num;
      break;
    default:
      input = NaN;
  }
  if (Number.isNaN(input)) return "0";
  let arr = input.toString().split(".");
  let fractionStr = arr[1] ? "." + arr[1] : ""; // 小数部分
  let integerStr = arr[0]; // 整数部分
  let count = 0;
  let commaInt = "";
  for (let i = integerStr.length - 1; i >= 0; i--) {
    commaInt += integerStr[i];
    count++;
    if (count >= 3 && i !== 0) {
      commaInt += ",";
      count = 0;
    }
  }
  commaInt = commaInt
    .split("")
    .reverse()
    .join("");
  return commaInt + fractionStr;
};
