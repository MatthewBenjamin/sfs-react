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

function App() {
  const [dataJson, setDataJson] = useState([]);
  let [nextId, setNextId] = useState(0);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [total, setTotal] = useState(new Big("0.00"));

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
    const newTotal = dataJson.reduce(
      (acc, { isChecked, balance: currentBalance }) => {
        if (isChecked) {
          return acc.add(currentBalance);
        }

        return acc;
      },
      new Big(0)
    );
    setTotal(newTotal);
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
      </main>
    </StyledAppContainerDiv>
  );
}

export default App;
