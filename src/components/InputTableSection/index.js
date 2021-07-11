import { useState } from "react";
import { StyledBottomContainerDiv, StyledButton } from "./table-styles";
import { handleAddDebt, handleRemoveDebt } from "./utils";
import Table from "./table";

const InputTableSection = ({ debtArray, setDebtArray, nextId, setNextId }) => {
  const [inputCreditorName, setInputCreditorName] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputMinPaymentPercentage, setInputMinPaymentPercentage] =
    useState("");
  const [inputBalance, setInputBalance] = useState("");

  return (
    <div>
      <Table
        inputCreditorName={inputCreditorName}
        setInputCreditorName={setInputCreditorName}
        inputFirstName={inputFirstName}
        setInputFirstName={setInputFirstName}
        inputLastName={inputLastName}
        setInputLastName={setInputLastName}
        inputMinPaymentPercentage={inputMinPaymentPercentage}
        setInputMinPaymentPercentage={setInputMinPaymentPercentage}
        inputBalance={inputBalance}
        setInputBalance={setInputBalance}
        debtArray={debtArray}
        setDebtArray={setDebtArray}
      />
      <StyledBottomContainerDiv>
        <StyledButton
          onClick={(e) => {
            handleAddDebt(e, {
              inputCreditorName,
              inputFirstName,
              inputLastName,
              inputBalance,
              inputMinPaymentPercentage,
              nextId,
              debtArray,
              setInputCreditorName,
              setInputFirstName,
              setInputLastName,
              setInputMinPaymentPercentage,
              setInputBalance,
              setDebtArray,
              setNextId,
            });
          }}
        >
          Add Debt
        </StyledButton>
        <StyledButton
          onClick={(e) => {
            handleRemoveDebt(e, { debtArray, setDebtArray });
          }}
        >
          Remove Debt
        </StyledButton>
      </StyledBottomContainerDiv>
    </div>
  );
};

export default InputTableSection;
