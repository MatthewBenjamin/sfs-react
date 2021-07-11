import styled from "styled-components";
import { StyledInputCheckbox, StyledTd } from "./table-styles";

const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  border: none;
`;

const StyledTdNoPadding = styled(StyledTd)`
  padding: 0;
`;

const replaceWithOnlyFloatNumber = (value) => value.replace(/[^\d.-]/g, "");

// TODO: labels for accessiblity and placeholders
const InputDebtTableRow = ({
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
}) => (
  <tr>
    <StyledTd noBorder>
      <StyledInputCheckbox type="checkbox" />
    </StyledTd>
    <StyledTdNoPadding>
      <StyledInput
        value={inputCreditorName}
        onChange={(e) => {
          e.preventDefault();
          setInputCreditorName(e.target.value);
        }}
      ></StyledInput>
    </StyledTdNoPadding>
    <StyledTdNoPadding>
      <StyledInput
        value={inputFirstName}
        onChange={(e) => {
          e.preventDefault();
          setInputFirstName(e.target.value);
        }}
      ></StyledInput>
    </StyledTdNoPadding>
    <StyledTdNoPadding>
      <StyledInput
        value={inputLastName}
        onChange={(e) => {
          e.preventDefault();
          setInputLastName(e.target.value);
        }}
      ></StyledInput>
    </StyledTdNoPadding>
    <StyledTdNoPadding>
      <StyledInput
        value={inputMinPaymentPercentage}
        onChange={(e) => {
          e.preventDefault();
          e.preventDefault();
          const newInputMinPaymentPercentage = replaceWithOnlyFloatNumber(
            e.target.value
          );
          setInputMinPaymentPercentage(newInputMinPaymentPercentage);
        }}
      ></StyledInput>
    </StyledTdNoPadding>
    <StyledTdNoPadding>
      <StyledInput
        value={inputBalance}
        onChange={(e) => {
          e.preventDefault();
          const newInputBalance = replaceWithOnlyFloatNumber(e.target.value);
          setInputBalance(newInputBalance);
        }}
      ></StyledInput>
    </StyledTdNoPadding>
  </tr>
);

export default InputDebtTableRow;
