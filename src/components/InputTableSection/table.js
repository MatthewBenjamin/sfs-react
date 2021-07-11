import { useState } from "react";
import {
  creditorName,
  firstName,
  lastName,
  minPaymentPercentage,
  balance,
  INITIAL_ALL_CHECKED,
} from "../../constants";
import {
  StyledTable,
  StyledTh,
  StyledInputCheckbox,
  StyledTd,
  StyledTr,
} from "./table-styles";
import InputDebtTableRow from "./input-debt";

const Table = ({
  inputCreditorName,
  setInputCreditorName,
  inputFirstName,
  setInputFirstName,
  inputLastName,
  setInputLastName,
  inputMinPaymentPercentage,
  setInputMinPaymentPercentage,
  inputBalance,
  setInputBalance,
  debtArray,
  setDebtArray,
}) => {
  const [globalCheckbox, setGlobalCheckbox] = useState(INITIAL_ALL_CHECKED);
  return (
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
                setDebtArray(newDebtArray);
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
                        setDebtArray(newDebtArray);
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
  );
};
export default Table;
