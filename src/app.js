import { useEffect, useState } from "react";
import styled from "styled-components";
import Big from "big.js";
import fetchData from "./fetch-data";
import Header from "./components/header";
import Table from "./components/table";

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
  const [dataJson, setDataJson] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [total, setTotal] = useState(new Big("0.00"));
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [totalCheckCount, setTotalCheckCount] = useState(0);

  useEffect(() => {
    fetchData()
      .then((data) => {
        const currentMaxId = data[data.length - 1].id;
        setNextId(currentMaxId + 1);
        setDataJson(data);
      })
      .catch(() => {
        setHasFetchError(true);
      });
  }, []);

  useEffect(() => {
    const { runningTotal: newTotal, runningCheckCount: newCheckCount } =
      dataJson.reduce(
        (acc, { isChecked, balance: currentBalance }) => {
          if (isChecked) {
            acc.runningTotal.add(currentBalance);
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
    setTotalRowCount(dataJson.length);
    setTotalCheckCount(newCheckCount);
  }, [dataJson]);

  return (
    <StyledAppContainerDiv>
      <Header hasFetchError={hasFetchError} hasFetched={!!dataJson} />
      <main>
        <Table
          debtArray={dataJson}
          setDataJson={setDataJson}
          total={total}
          nextId={nextId}
          setNextId={setNextId}
        />
        <StyledCountContainerDiv>
          <StyledCountSpan>Total Row Count: {totalRowCount}</StyledCountSpan>
          <StyledCountSpan>Check Row Count: {totalCheckCount}</StyledCountSpan>
        </StyledCountContainerDiv>
      </main>
    </StyledAppContainerDiv>
  );
}

export default App;
