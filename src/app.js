import { useEffect, useState } from "react";
import styled from "styled-components";
import Big from "big.js";
import fetchDebtArray from "./fetch-debt-array";
import Header from "./components/header";
import InputTableSection from "./components/InputTableSection";
import { LOADING_STATUS, ERROR_STATUS, SUCCESS_STATUS } from "./constants";

export const StyledTotalDiv = styled.div`
  background: cyan;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0.5rem;
`;

const StyledAppContainerDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledCountContainerDiv = styled.div`
  margin-top: 1rem;
`;

const StyledCountSpan = styled.span`
  width: 50%;
  display: inline-block;
  font-weight: bold;
`;

function App() {
  const [debtArray, setDebtArray] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [fetchStatus, setFetchStatus] = useState(LOADING_STATUS);
  const [total, setTotal] = useState(new Big("0.00")); // putting Big.js instance in state probably not great for memory management
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [totalCheckCount, setTotalCheckCount] = useState(0);

  useEffect(() => {
    fetchDebtArray()
      .then((data) => {
        const currentMaxId = data[data.length - 1].id;
        setNextId(currentMaxId + 1);
        setDebtArray(data);
        setFetchStatus(SUCCESS_STATUS);
      })
      .catch(() => {
        setFetchStatus(ERROR_STATUS);
      });
  }, []);

  // compute totals when array updates
  useEffect(() => {
    const { runningTotal: newTotal, runningCheckCount: newCheckCount } =
      debtArray.reduce(
        (acc, { isChecked, balance: currentBalance }) => {
          if (isChecked) {
            acc.runningTotal = acc.runningTotal.plus(currentBalance);
            acc.runningCheckCount = acc.runningCheckCount + 1;
          }

          return acc;
        },
        {
          runningTotal: new Big(0),
          runningCheckCount: 0,
        }
      );
    setTotal(newTotal);
    setTotalRowCount(debtArray.length);
    setTotalCheckCount(newCheckCount);
  }, [debtArray]);

  return (
    <StyledAppContainerDiv>
      <Header fetchStatus={fetchStatus} />
      <main>
        <InputTableSection
          debtArray={debtArray}
          setDebtArray={setDebtArray}
          nextId={nextId}
          setNextId={setNextId}
        />
        <StyledTotalDiv>
          <span>Total:</span> <span>${total.toFixed(2).toString()}</span>
        </StyledTotalDiv>
        <StyledCountContainerDiv>
          <StyledCountSpan>Total Row Count: {totalRowCount}</StyledCountSpan>
          <StyledCountSpan>Check Row Count: {totalCheckCount}</StyledCountSpan>
        </StyledCountContainerDiv>
      </main>
    </StyledAppContainerDiv>
  );
}

export default App;
