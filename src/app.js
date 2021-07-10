import { useEffect, useState } from 'react';
import styled from 'styled-components'
import fetchData from './fetch-data'
import Header from './components/header'
import Table from './components/table'

const StyledAppContainerDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

function App() {
  const [dataJson, setDataJson] = useState([])
  const [hasFetchError, setHasFetchError] = useState(false)

  useEffect(() => {
    fetchData()
      .then(setDataJson)
      .catch(() => {
        setHasFetchError(true)
    })
  }, [setDataJson, setHasFetchError])

  return (
    <StyledAppContainerDiv>
      <Header hasFetchError={hasFetchError} hasFetched={!!dataJson} />
      <main>
        <Table debtArray={dataJson} setDataJson={setDataJson} />
      </main>
    </StyledAppContainerDiv>
  )
}

export default App;
