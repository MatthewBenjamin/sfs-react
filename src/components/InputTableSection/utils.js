import Big from "big.js";

const ERROR_TEXT = "ERROR";

export const handleAddDebt = (
  e,
  {
    inputCreditorName,
    inputFirstName,
    inputLastName,
    inputBalance,
    inputMinPaymentPercentage,
    debtArray,
    setInputCreditorName,
    setInputFirstName,
    setInputLastName,
    setInputMinPaymentPercentage,
    setInputBalance,
    setDebtArray,
    nextId,
    setNextId,
  }
) => {
  e.preventDefault();
  const numInputBalance = Number(inputBalance);
  const numInputMinPaymentPercentage = Number(inputMinPaymentPercentage);

  // TODO: better validation and per field error msg
  if (
    inputCreditorName &&
    inputFirstName &&
    inputLastName &&
    !Number.isNaN(numInputBalance) &&
    !Number.isNaN(numInputMinPaymentPercentage)
  ) {
    const newDebtArray = [
      ...debtArray,
      {
        id: nextId,
        creditorName: inputCreditorName,
        firstName: inputFirstName,
        lastName: inputLastName,
        minPaymentPercentage: new Big(numInputMinPaymentPercentage),
        balance: new Big(numInputBalance),
        isChecked: true,
      },
    ];
    setInputCreditorName("");
    setInputFirstName("");
    setInputLastName("");
    setInputMinPaymentPercentage("");
    setInputBalance("");
    setDebtArray(newDebtArray);
    setNextId(nextId + 1);
  } else {
    setInputCreditorName(ERROR_TEXT);
    setInputFirstName(ERROR_TEXT);
    setInputLastName(ERROR_TEXT);
    setInputMinPaymentPercentage(ERROR_TEXT);
    setInputBalance(ERROR_TEXT);
  }
};

export const handleRemoveDebt = (e, { debtArray, setDebtArray }) => {
  e.preventDefault();
  const newDebtArray = debtArray.filter(({ isChecked }) => !isChecked);
  setDebtArray(newDebtArray);
};
