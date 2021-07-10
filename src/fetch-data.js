import Big from "big.js";
import { INITIAL_ALL_CHECKED } from "./constants";

const DATA_URI =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

const mapWithChecked = (dataArray, checkAll = true, checkId = false) =>
  dataArray.map((obj) => {
    const { id, balance, minPaymentPercentage } = obj;
    const isChecked = checkAll || checkId === id;
    const bigJsBalance = new Big(balance);
    const bigJsMinPaymentPercentage = new Big(minPaymentPercentage);

    return {
      ...obj,
      balance: bigJsBalance,
      minPaymentPercentage: bigJsMinPaymentPercentage,
      isChecked,
    };
  });

const fetchData = () =>
  fetch(DATA_URI)
    .then((res) => res.json())
    .then((dataArray) => mapWithChecked(dataArray, INITIAL_ALL_CHECKED));

export default fetchData;
