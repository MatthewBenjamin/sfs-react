import { useState } from "react";
import {
  StyledTable,
  StyledTh,
  StyledInputCheckbox,
  StyledTd,
  StyledBottomContainerDiv,
  StyledButton,
  StyledResultsDiv,
  StyledTr,
} from "./table-styles";
import {
  creditorName,
  firstName,
  lastName,
  minPaymentPercentage,
  balance,
  INITIAL_ALL_CHECKED,
} from "../../constants";
import InputDebtTableRow from "./input-debt";
import { handleAddDebt, handleRemoveDebt } from "./utils";

// TODO: refactor
const Table = ({ debtArray, setDataJson, total, nextId, setNextId }) => {
  const [inputCreditorName, setInputCreditorName] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputMinPaymentPercentage, setInputMinPaymentPercentage] =
    useState("");
  const [inputBalance, setInputBalance] = useState("");
  const [globalCheckbox, setGlobalCheckbox] = useState(INITIAL_ALL_CHECKED);

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh noBorder>
              <StyledInputCheckbox
                checked={globalCheckbox}
                type="checkbox"
                onChange={(e) => {
                  const newCheckedValue = !globalCheckbox;
                  console.log({ newCheckedValue, e });
                  const newDebtArray = debtArray.map((currentDebtItem) => ({
                    ...currentDebtItem,
                    isChecked: newCheckedValue,
                  }));
                  setDataJson(newDebtArray);
                  setGlobalCheckbox(newCheckedValue);
                }}
              />
            </StyledTh>
            <StyledTh>{creditorName.name}</StyledTh>
            <StyledTh>{firstName.name}</StyledTh>
            <StyledTh>{lastName.name}</StyledTh>
            <StyledTh rightAlign>{minPaymentPercentage.name}</StyledTh>
            <StyledTh rightAlign>{balance.name}</StyledTh>
          </tr>
        </thead>
        <tbody>
          {debtArray
            ? debtArray.map(
                ({
                  [creditorName.key]: rowCreditorName,
                  [firstName.key]: rowFirstName,
                  [lastName.key]: rowLastName,
                  [minPaymentPercentage.key]: rowMinPaymentPercentage,
                  [balance.key]: rowBalance,
                  id,
                  isChecked,
                }) => (
                  <StyledTr key={id} isChecked={isChecked}>
                    <StyledTd noBorder>
                      <StyledInputCheckbox
                        checked={isChecked}
                        type="checkbox"
                        onChange={(e) => {
                          const newDebtArray = debtArray.map(
                            (currentDebtItem) => {
                              const { id: currentId } = currentDebtItem;

                              if (id === currentId) {
                                return {
                                  ...currentDebtItem,
                                  isChecked: !isChecked,
                                };
                              }

                              return currentDebtItem;
                            }
                          );
                          setDataJson(newDebtArray);
                        }}
                      />
                    </StyledTd>
                    <StyledTd>{rowCreditorName}</StyledTd>
                    <StyledTd>{rowFirstName}</StyledTd>
                    <StyledTd>{rowLastName}</StyledTd>
                    <StyledTd rightAlign>
                      {rowMinPaymentPercentage.toFixed(2).toString()}%
                    </StyledTd>
                    <StyledTd rightAlign>
                      {rowBalance.toFixed(2).toString()}
                    </StyledTd>
                  </StyledTr>
                )
              )
            : null}
          <InputDebtTableRow
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
          />
        </tbody>
      </StyledTable>
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
              setDataJson,
              setNextId,
            });
          }}
        >
          Add Debt
        </StyledButton>
        <StyledButton
          onClick={(e) => {
            handleRemoveDebt(e, { debtArray, setDataJson });
          }}
        >
          Remove Debt
        </StyledButton>
        <br />
      </StyledBottomContainerDiv>
      <StyledResultsDiv>
        <span>Total:</span> <span>${total.toFixed(2).toString()}</span>
      </StyledResultsDiv>
    </div>
  );
};

export default Table;
