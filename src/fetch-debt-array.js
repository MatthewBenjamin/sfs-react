import Big from "big.js";
import { INITIAL_ALL_CHECKED } from "./constants";

const DATA_URI =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

const mapWithChecked = (dataArray) =>
  dataArray.map((obj) => {
    const { balance, minPaymentPercentage } = obj;
    const bigJsBalance = new Big(balance);
    const bigJsMinPaymentPercentage = new Big(minPaymentPercentage);

    return {
      ...obj,
      balance: bigJsBalance,
      minPaymentPercentage: bigJsMinPaymentPercentage,
      isChecked: INITIAL_ALL_CHECKED,
    };
  });

const fetchDebtArray = () =>
  fetch(DATA_URI)
    .then((res) => res.json())
    .then(mapWithChecked);

export default fetchDebtArray;
